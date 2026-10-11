import { API_URL } from "@/lib/api"
import { IProductType } from "@/types/Product.type";

export const getProducts = async() : Promise<IProductType[]> => {
   const res = await fetch(`${API_URL}/products`)

   if(!res.ok){
      throw new Error("Failed to fetch products");
   }
   return await res.json()

}