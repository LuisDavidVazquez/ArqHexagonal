import { Product } from "./Product";

export interface ProductRepository {
  getAll(): Promise<Product[] | null>;

  createProduct(
    name: string,
    description: string,
    price: number
  ): Promise<Product | null>;

  //New repository
  getById(id: number) : Promise<Product[] | null>
}
