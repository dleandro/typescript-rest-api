import axios from 'axios';
import Filter from '../util/filter';
import Order from '../util/order';
import { JSONBinResponse } from '../dtos/dtos';

const jsonbinServiceUseCase = async (query: any) => {
  const filter = setupFilter(query);
  const order = setupOrder(query);

  let data = await fetchJSONbinData();

  if (filter) {
    data.record = filter.execute(data.record);
  }

  if (order) {
    data.record = order.execute(data.record);
  }

  return data;
};

const setupFilter = (query: any) => {
  if (query.filter) {
    const filter = new Filter(query.filter);
    filter.validate();
    return filter
  }
  return undefined
};

const setupOrder = (query: any) => {
    if (query.order) {
        const order = new Order(query.order);
        order.validate();
        return order
    }
    return undefined;
}

const fetchJSONbinData = async () => {
  const { data } = await axios.get<JSONBinResponse>(
    'https://api.jsonbin.io/v3/b/5f69afbe65b18913fc510ce8',
    {
      headers: {
        Accept: 'application/json'
      }
    }
  );

  return data;
};

export { jsonbinServiceUseCase };

