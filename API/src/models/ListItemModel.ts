import BaseModel from './BaseModel';
import ProductModel from './ProductModel';

class ListItemModel extends BaseModel {
  public Product: ProductModel;
  public Price: number;
  public Quantity: number;
  public Total: number;
  public Checked: boolean;
  public Notes: string;
}

export default ListItemModel;
