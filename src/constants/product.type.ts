


export interface TCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;   // ISO Date string
  updatedAt: string;    // ISO Date string
}

export interface TProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: TCategory;
  images: string[];
  creationAt: string;   // ISO Date string
  updatedAt: string;    // ISO Date string
}