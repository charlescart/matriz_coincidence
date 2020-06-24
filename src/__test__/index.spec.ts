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

  it('Test 3 - a:[1000, 2000, 3000, 4000, 5000] b:[5000, 6000, 7000, 8000]', () => {
    const a = [1000, 2000, 3000, 4000, 5000];
    const b = [5000, 6000, 7000, 8000];

    const res = checkSameElementExistence(a, b);
    expect(res).toMatchSnapshot();
  });

  it('Test 4 - a:[1, 2, 3, 4] b:[-1, 0, 2, 5, 6]', () => {
    const a = [1, 2, 3, 4];
    const b = [-1, 0, 2, 5, 6];

    const res = checkSameElementExistence(a, b);
    expect(res).toMatchSnapshot();
  });

  it('Test 5 - a:[0] b:[-1]', () => {
    const a = [0];
    const b = [-1];

    const res = checkSameElementExistence(a, b);
    expect(res).toMatchSnapshot();
  });

  it('Test 6 - a:[1, 5, 7, 9, 11] b:[4, 8, 12, 16]', () => {
    const a = [1, 5, 7, 9, 11];
    const b = [4, 8, 12, 16];

    const res = checkSameElementExistence(a, b);
    expect(res).toMatchSnapshot();
  });

  it('Test 7 - a:[1, 2, 3, 4, 5] b: [3, 5, 7, 9]', () => {
    const a = [1, 2, 3, 4, 5];
    const b = [3, 5, 7, 9];

    const res = checkSameElementExistence(a, b);
    expect(res).toBeTruthy();
    expect(res).toMatchSnapshot();
  });

  it('Test 8 - a:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] b:[11, 12, 13, 14, 15]', () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const b = [11, 12, 13, 14, 15];

    const res = checkSameElementExistence(a, b);
    expect(res).toBeFalsy();
    expect(res).toMatchSnapshot();
  });

  it('Test 9 - a:[...] b:[...]', () => {
    const a = [-952, -880, -874, -853, -789, -774, -706, -695, -635, -632, -557, -539, -440, -369, -302, -270, -231, -222, -215, -190, -106, -59, -43, -26, 41, 126, 138, 202, 262, 279, 299, 306, 363, 392, 400, 401, 465, 465, 527, 539, 562, 565, 638, 644, 659, 664, 893, 897, 916, 938];
    const b = [-9944, -9479, -9368, -8447, -8128, -6658, -6321, -5752, -5701, -3700, -3473, -3394, -3373, -2830, -2820, -2711, -943, -62, 145, 233, 499, 595, 675, 740, 878, 1806, 2317, 2439, 2650, 3026, 3421, 3975, 4512, 5025, 5180, 5451, 5469, 6062, 6168, 6793, 7256, 7426, 7449, 7512, 8264, 8336, 8363, 8466, 8610, 8813];

    const res = checkSameElementExistence(a, b);
    expect(res).toBeFalsy();
    expect(res).toMatchSnapshot();
  });

  it('Test 10 - a:[1] b:[1]', () => {
    const a = [1];
    const b = [1];

    const res = checkSameElementExistence(a, b);
    expect(res).toBeTruthy();
    expect(res).toMatchSnapshot();
  });
});