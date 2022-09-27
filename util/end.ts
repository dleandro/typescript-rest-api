import Query from './query';
import { isString } from './utilFunctions';

class End implements Query<string> {
  endQuery: string;
  constructor(endQuery: string) {
    this.endQuery = endQuery;
  }
  execute(data: string[]): string[] {
    data.push(this.endQuery)
    return data
  }

  validate(): void {
    if (!isString(this.endQuery)) {
      throw new Error('end has wrong format');
    }
  }
}

export default End;
