export type Cosmetic = {
  id: string;
  name: string;
  description: string;
  type?: Rarity | null;
  rarity?: Rarity | null;
  series?: Series | null;
  set?: Set | null;
  introduction?: Introduction | null;
  images?: Images | null;
  variants?: Variant[] | null;
  searchTags?: string[] | null;
  gameplayTags?: string[] | null;
  metaTags?: string[] | null;
  showcaseVideo?: string | null;
  dynamicPakId?: string | null;
  displayAssetPath?: string | null;
  definitionPath?: string | null;
  path?: string | null;
  added?: string | null;
  shopHistory?: string[] | null;
};

export type Images = {
  smallIcon?: string | null;
  icon?: string | null;
  featured?: string | null;
  other?: string | null;
};

export type Rarity = {
  value?: string | null;
  displayValue?: string | null;
  backendValue?: string | null;
};

export type Set = {
  value: string;
  text: string;
  backendValue: string;
};

export type Introduction = {
  chapter: string;
  season: string;
  text: string;
  backendValue: number;
};

export type Series = {
  value: string | null;
  image: string | null;
  colors: string[] | null;
  backendValue: string | null;
};

export type Variant = {
  channel: string | null;
  type: string | null;
  options:
    | {
        tag: string;
        name: string;
        image: string;
        unlockRequirements?: string;
      }[]
    | null;
};
