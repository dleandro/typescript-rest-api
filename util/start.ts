import Query from './query';
import { isString } from './utilFunctions';

class Start implements Query<string> {
  startQuery: string;
  constructor(startQuery: string) {
    this.startQuery = startQuery;
  }
  execute(data: string[]): string[] {
    return [this.startQuery, ...data]
  }

  validate(): void {
    if (!isString(this.startQuery)) {
      throw new Error('start has wrong format');
    }
  }
}

export default Start;
