/* const mdLinks = require('../'); */
const pathAbsolute = require('../src/index');

describe('pathAbsolute',()=>{
  it('is a function', () => {
    expect(typeof pathAbsolute).toBe('function');
  });
  it('returns the same path if it is absolute', () => {
    const result="C:\Users\PC\Documents\GitHub\LIM015-md-links\README.md"
    expect(pathAbsolute("C:\Users\PC\Documents\GitHub\LIM015-md-links\README.md")).toBe(result);
  });
  it('returns the absolute path if it is relative', () => {
    const result="C:\Users\PC\Documents\GitHub\LIM015-md-links\README.md"
    expect(pathAbsolute(README.md)).toBe(result);
  });
});
