const stats = require('../src/cli-methods.js');
const links = [{
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
}]
const total = `Total  : 2
Unique : 2`;
const broken =`Broken : 0`;

describe('statsLinks',()=>{
    it('is a function', () => {
      expect(typeof stats.statsLinks).toBe('function');
    });
    
    it('returns total and unique of the array', () => {
      expect(stats.statsLinks(links)).toEqual(total);
    });
  
    it('returns broken of the array', () => {
      expect(stats.brokenLinks(links)).toEqual(broken);
    });
  });
  
