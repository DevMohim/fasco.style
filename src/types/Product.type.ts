export interface IProductType {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  subcategory: string;
  brand: string;
  gender: string;
  color: string;
  sizes: string[];
  inStock: boolean;
  stock: number;
  rating: number;
  reviews: number;
  thumbnail: string;
  images: string[];
}