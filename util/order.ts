import Query from './query';
import { Country } from '../dtos/dtos';

class Order implements Query<Country> {
  orderQuery: string;
  possibleOrderQueries = ['asc', 'desc'];
  constructor(orderQuery: string) {
    this.orderQuery = orderQuery;
  }
  execute(data: Country[]): Country[] {
    return data.sort((a, b) => {
      if (this.orderQuery == 'asc') {
        return +a.vat - +b.vat;
      } else {
        return +b.vat - +a.vat;
      }
    });
  }
  validate(): void {
    if (!this.possibleOrderQueries.includes(this.orderQuery)) {
      throw new Error('order has wrong format');
    }
  }
}

export default Order;
