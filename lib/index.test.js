import arrayMultiFilter from './';

describe('arrayMultiFilter', () => {
  const data = [{
    id: 1,
    name: 'Tester',
    age: 20,
  }, {
    id: 1,
    name: 'Taster',
    age: 21,
  }, {
    id: 1,
    name: 'Tester',
    age: 21,
  }];

  it('Filters data', () => {
    const query = { age: 21, name: 'Tester' };
    const filtered = data.filter(arrayMultiFilter, query);
    const expected = [{
      id: 1,
      name: 'Tester',
      age: 21,
    }];

    expect(filtered).toEqual(expected);
  });
});
