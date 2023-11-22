import { filterData } from '../src/dataFunctions.js';
import { sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';
import { dataSort as fakeDatta } from './data.js';



describe('filterData', () => {

  it('campoPersonajes', () => {
    const filtradoAlignment = filterData(
      fakeData,
      "alignment",
      "gender"
    );
    expect(filtradoAlignment.length).toBe(3);
  });
});

describe("sortData", () => {

  it("alfabetico", () => {
    const ordenDesc = sortData(
      fakeDatta,
      "name",
    );
    const names = [...ordenDesc];
    const namesOrdenado = names.sort();
    expect(namesOrdenado).toEqual(names);
  });
});
