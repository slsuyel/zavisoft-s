export interface TCategory {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface TProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: TCategory;
  images: string[];
}
