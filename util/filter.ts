import Query from './query';
import { Country } from '../dtos/dtos';
import { isString } from './utilFunctions';

class Filter implements Query<Country> {
  filterQuery: string;
  constructor(filterQuery: string) {
    this.filterQuery = filterQuery;
  }
  execute(data: Country[]): Country[] {
    return data.filter(
      (c) =>
        c.code.includes(this.filterQuery) ||
        c.country.includes(this.filterQuery)
    );
  }
  validate(): void {
    if (!isString(this.filterQuery)) {
      throw new Error('filter has wrong format');
    }
  }
}

export default Filter;
