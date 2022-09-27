import Start from '../util/start';
import End from '../util/end';

const reverseWordUseCase = (query: any) => {
  const start = setupStart(query);
  const end = setupEnd(query);

  const envVariableValue = process.env.SIMPLE_ARRAY;
  let currArray: string[] = [];

  if (envVariableValue) {
    currArray = JSON.parse(envVariableValue);
  }

  if (start) {
    currArray = start.execute(currArray);
  }

  if (end) {
    currArray = end.execute(currArray);
  }

  process.env.SIMPLE_ARRAY = JSON.stringify(currArray);

  return { arr: JSON.parse(process.env.SIMPLE_ARRAY) };
};

const setupStart = (query: any) => {
  if (query.start) {
    const start = new Start(query.start);
    start.validate();
    return start;
  }
  return undefined;
};

const setupEnd = (query: any) => {
  if (query.end) {
    const end = new End(query.end);
    end.validate();
    return end;
  }
  return undefined;
};

export default reverseWordUseCase;
