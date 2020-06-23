import { checkSameElementExistence } from '../index';

describe('index.ts', () => {
  it('Test 1 - a:[1, 2, 3, 5], b:[1, 4, 5]', () => {
    const a: number[] = [1, 2, 3, 5];
    const b: number[] = [1, 4, 5];

    const res = checkSameElementExistence(a, b);
    expect(res).toMatchSnapshot();
  });

  it('Test 2 - a:[1, 3, 5], b:[-2, 0, 2, 4, 6]', () => {
    const a = [1, 3, 5];
    const b = [-2, 0, 2, 4, 6];

    const res = checkSameElementExistence(a, b);
    expect(res).toMatchSnapshot();
  });

  it('Test 2 - a:[1000, 2000, 3000, 4000, 5000] b:[5000, 6000, 7000, 8000]', () => {
    const a = [1000, 2000, 3000, 4000, 5000];
    const b = [5000, 6000, 7000, 8000];

    const res = checkSameElementExistence(a, b);
    expect(res).toMatchSnapshot();
  });
});