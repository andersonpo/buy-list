interface IGenericService<T> {
  list(orderFields: string, orderType: string): Promise<T[]>;
  findById(entity: T): Promise<T>;
  create(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  delete(entity: T): Promise<boolean>;
}

export default IGenericService;
