import { useState } from 'react';
import { SearchIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import useSWR from 'swr';
import { Cosmetic } from '@the-collective/model';

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const post = (url: string) =>
  fetcher(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

export function Index() {
  const [search, setSearch] = useState('');

  const { data: cosmetics } = useSWR<{ item: Cosmetic }[]>(
    `${process.env.NX_API_URL}/api/search?q=${search}`,
    fetcher
  );

  const { data: pinned, mutate: refetch } = useSWR<
    { [key: string]: boolean }[]
  >(`${process.env.NX_API_URL}/api/pinned`, fetcher);

  return (
    <>
      <div className="sticky top-0 bg-red-200 z-10 drop-shadow">
        <div className=" container mx-auto p-4 flex flex-row items-center gap-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <SearchIcon className="h-4 w-4 text-slate-500" />
            </div>
            <input
              className="rounded h-8 pl-8 bg-red-50"
              placeholder="I'm looking for..."
              value={search}
              type="text"
              onChange={({ target: { value } }) => setSearch(value)}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 flex flex-col items-center">
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8">
          {(cosmetics ?? []).map(({ item }) => (
            <div
              key={item.id}
              data-test="cosmetic"
              className="rounded bg-gray-300/75 drop-shadow"
            >
              <div className="bg-red-200/90 p-4 text-lg text-slate-600 rounded-t flex flex-row align-center gap-4">
                <LocationMarkerIcon
                  className={`h-8 w-8 ${
                    pinned[item.id] ? 'text-slate-600' : 'text-slate-400'
                  }`}
                  onClick={async () => {
                    await pin(pinned[item.id] ? 'unpin' : 'pin', item.id);
                    refetch();
                  }}
                />
                {item.name}
              </div>
              <div className="flex flex-row relative gap-4">
                <div className="flex-1 p-4 text-slate-600">
                  {item.description}
                </div>
                <div className="w-32 h-32 rounded bg-red-300 overflow-hidden drop-shadow-sm -translate-x-2 -translate-y-1 scale-125">
                  <Image
                    src={
                      item.images.featured ||
                      item.images.icon ||
                      item.images.smallIcon ||
                      item.images.other
                    }
                    alt={`Image of ${item.name} cosmetic.`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;

const pin = (action: 'pin' | 'unpin', cosmeticId: string) =>
  post(`${process.env.NX_API_URL}/api/${action}/${cosmeticId}`);
