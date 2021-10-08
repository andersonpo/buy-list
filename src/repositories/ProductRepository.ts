import ProductModel from '../models/ProductModel';
import GenericRepository from './GenericRepository';

class ProductRepository extends GenericRepository<ProductModel> {
  listByCategory = async (
    category: string,
    orderFields: string,
    orderType: string
  ): Promise<ProductModel[]> => {
    let orderBy = '';
    if (orderFields.trim() === '') {
      orderType = '';
    } else if (orderType.trim() === '') {
      orderType = 'ASC';
    }

    if (orderType.length > 0) {
      orderBy = ' ORDER BY ' + orderFields + ' ' + orderType;
    }

    const query =
      'SELECT * FROM ' +
      this.tableName +
      ' WHERE category = :category' +
      orderBy;
    return this.database
      .executeMany(query, category)
      .then((rows) => {
        return Promise.resolve(rows);
      })
      .catch((error) => {
        console.error('[ProductRepository - listByCategory]', error);
        return Promise.reject(error);
      });
  };
}

export default ProductRepository;
