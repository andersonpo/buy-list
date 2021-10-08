import ProductModel from '../models/ProductModel';
import ProductRepository from '../repositories/ProductRepository';
import GenericService from './GenericService';

class ProductService extends GenericService<ProductModel> {
  constructor(private readonly productRepository: ProductRepository) {
    super(productRepository);
  }

  listByCategory = async (
    category: string,
    orderFields: string,
    orderType: string
  ): Promise<ProductModel[]> => {
    return this.productRepository
      .listByCategory(category, orderFields, orderType)
      .then((rows) => {
        return Promise.resolve(rows);
      })
      .catch((error) => {
        console.error('[GenericService - ERROR list]', error);
        return Promise.reject(error);
      });
  };
}

export default ProductService;
