/* const mdLinks = require('../'); */
const index = require('../src/index');

const fileMd = "C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\README1.md";
const directory = "C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba";
const emptyPath ="C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\pruebaEmpty";
const filesMd = [
    'C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\pruebaEmpty\\vacio\\README3.md',
    'C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\README1.md',
    'C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\unaCarpeta\\README2.md'
  ]
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
const validate=[{
    href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
    title: 'Arreglos',
    file: 'C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\README1.md',
    status: 200,
    message: 'OK'
  },
  {
    href: 'https://github.com/404',
    title: 'Github',
    file: 'C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\README1.md',
    status: 404,
    message: 'FAIL'
  }
]

describe('pathAbsolute',()=>{
  it('is a function', () => {
    expect(typeof index.pathAbsolute).toBe('function');
  });
  it('returns the same path if it is absolute', () => {
    expect(index.pathAbsolute(fileMd)).toEqual(fileMd);
  });
  it('returns the absolute path if it is relative', () => {
    expect(index.pathAbsolute("prueba\\README1.md")).toEqual(fileMd);
  });
});

describe('existsPath',()=>{
  it('is a function', () => {
    expect(typeof index.existsPath).toBe('function');
  });
  it('the path exists', () => {
    expect(index.existsPath(fileMd)).toEqual(true);
  });
});

describe('getFilesMd',()=>{
  it('is a function', () => {
    expect(typeof index.getFilesMd).toBe('function');
  });
  
  it('the path is a directory and returns the files md', () => {
    expect(index.getFilesMd(directory)).toEqual(filesMd);
  });
  
  it('the path is a file md', () => {
    expect(index.getFilesMd(fileMd)).toEqual([fileMd]);
  });
  
});

describe('getLinks',()=>{
  it('is a function', () => {
    expect(typeof index.getLinks).toBe('function');
  });
  
  it('returns the href, file and text', () => {
    expect(index.getLinks(fileMd)).toEqual(links);
  });

  it('returns the not links', () => {
    expect(index.getLinks(emptyPath)).toEqual([]);
  });  
});

describe('getValidLinks',()=>{
  it('is a function', () => {
    expect(typeof index.getValidLinks).toBe('function');
  });

  it('returns the status of links', () => {
    index.getValidLinks(links)
    .then((res) => {
      expect(res).toEqual(...validate)
    });
  });

  it('returns the x of links', () => {
    index.getValidLinks(links)
    .catch((rej)=>{
      expect(rej).toEqual(...validate)
    })
  });
 
  
})