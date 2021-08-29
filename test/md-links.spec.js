const {mdlinks} = require('../src/mdLinks.js');
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
const validate = [  
  {
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
describe('mdLinks',()=>{
    it('is a function', () => {
      expect(typeof mdlinks).toBe('function');
    });
    it('returns an array with href, file and text', () => {
        mdlinks('./prueba/README1.md', { validate: false })
        .then((res)=>{
           expect(res).toEqual(links);
      })
    });
    it('returns an array with href, file, text, message and status', () => {
        mdlinks('./prueba/README1.md', { validate: true })
        .then((res)=>{
            expect(res).toEqual(validate);
       })
    });
    it('returns a message noExists', () => { 
        mdlinks('./pruebaREADME1.md', { validate: false })
        .catch((rej)=>{
            expect(rej).toEqual('noExist');
       })
    });
    it('returns a message errorPath', () => { 
        mdlinks('./prueba/pruebaEmpty', { validate: true })
        .catch((rej)=>{
            expect(rej).toEqual('error');
       })
    });
  });
  