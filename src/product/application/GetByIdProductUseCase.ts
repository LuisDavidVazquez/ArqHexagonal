import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class GetByIdProductUseCase {
constructor(readonly productRepository: ProductRepository) {}

  async run(id : number): Promise<Product[] | null> {
    try {
      const result = await this.productRepository.getById(id);
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
