/* const mdLinks = require('../'); */
const {pathAbsolute,existsPath} = require('../src/index.js');
/* describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

}); */
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

describe('existsPath', () => {
  it('is a function', () => {
    expect(typeof existsPath).toBe('function');
  });

  it('verifies if a path exists', () => {
    const result = true;
    expect(validPath(README.md)).toStrictEqual(result);
  });
});