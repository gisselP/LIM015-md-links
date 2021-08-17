/* const mdLinks = require('../'); */
const index = require('../src/index');

describe('pathAbsolute',()=>{
  const path ="C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\README.md";
  it('is a function', () => {
    expect(typeof index.pathAbsolute).toBe('function');
  });
  it('returns the same path if it is absolute', () => {
    expect(index.pathAbsolute(path)).toEqual(path);
  });
  it('returns the absolute path if it is relative', () => {
    expect(index.pathAbsolute("README.md")).toEqual(path);
  });
});

describe('existsPath',()=>{
  it('is a function', () => {
    expect(typeof index.existsPath).toBe('function');
  });
  it('the path exists', () => {
    expect(index.existsPath("C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\README.md")).toEqual(true);
  });
});

describe('getFilesMd',()=>{
  const filesMd = [
    'C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\README1.md',
    'C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\unaCarpeta\\README2.md'
  ]
  const path = "C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba";
  const fileMd = "C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\README.md";
  it('is a function', () => {
    expect(typeof index.getFilesMd).toBe('function');
  });
  
  it('the path is a directory and returns the files md', () => {
    expect(index.getFilesMd(path)).toEqual(filesMd);
  });
  
  it('the path is a file md', () => {
    expect(index.getFilesMd(fileMd)).toEqual([fileMd]);
  });
  
});

describe('getLinks',()=>{
  const links = [{
    href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
    title: 'Arreglos',
    file: 'C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\README1.md'
  },
  { 
    href: 'https://github.com/404',
    title: 'Github',
    file: 'C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\README1.md'
    
  }]
  const path = "C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\README1.md";

  it('is a function', () => {
    expect(typeof index.getLinks).toBe('function');
  });
  
  it('returns the links', () => {
    expect(index.getLinks(path)).toEqual(links);
  });
  
});

describe('getLinks',()=>{
  const path = "C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\README1.md";
  const links = [{
    href: "https://curriculum.laboratoria.la/es/topics/javascript/04-arrays", 
    file:"C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\README1.md", 
    title: "Arreglos"
  }, 
  {
    href: "https://github.com/404", 
    file: "C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\README1.md", 
    title: "Github"
  }]
  it('is a function', () => {
    expect(typeof index.getLinks).toBe('function');
  });

  it('returns the status of links', () => {
    expect(index.getLinks(path)).toEqual(links);
  });
});
