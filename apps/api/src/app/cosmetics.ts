export type Cosmetic = {
  id: string;
  name: string;
  description: string;
  type: Rarity;
  rarity: Rarity;
  series: null;
  set: Set;
  introduction: null;
  images: Images;
  variants: null;
  searchTags: null;
  gameplayTags: string[];
  metaTags: null;
  showcaseVideo: null;
  dynamicPakId: null;
  displayAssetPath: string;
  definitionPath: null;
  path: string;
  added: Date;
  shopHistory: Date[];
};

export type Images = {
  smallIcon: string;
  icon: string;
  featured: string;
  other: null;
};

export type Rarity = {
  value: string;
  displayValue: string;
  backendValue: string;
};

export type Set = {
  value: string;
  text: string;
  backendValue: string;
};
