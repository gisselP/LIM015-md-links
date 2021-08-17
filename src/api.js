
const path = require ('path');
const userPath = process.argv[2];
const fs = require('fs');
const fetch = require('node-fetch');

/*------------------1.Funcion que comprueba si existe la ruta --------------*/
const validatePath = (route) =>fs.existsSync(route)

/*------------------2.Funcion que comprueba si la ruta es absoluta---------*/
const convertToAbsolute = (route) => path.resolve(route)

/*------------------3.Funcion que verifica si es directorio---------------*/
const itsDirectory = (route) => fs.statSync(route).isDirectory()


/*---------------------4.Funcion que verdifica si tiene archivos md---------*/
const mdExtension = (route) => path.extname(route)

/*---------------------5.Funcion que lee los archivo----------------------*/
const readFile = (route) => fs.readFileSync(route, { encoding: 'utf-8', flag: 'r' });

// /*---------------------6.Funcion que filtra archivos md ---------------------*/
function searchFileMd(route) {
  let allFilesMd = [];
  if (itsDirectory(route)) {
    const readDirectory = fs.readdirSync(route);
    readDirectory.forEach((file) => {
      const pathAbsolute = convertToAbsolute(`${route}/${file}`);
      // const stat = fs.statSync(pathAbsolute);
      if (itsDirectory(pathAbsolute)) {
        /* Recurse into a subdirectory */
        allFilesMd = allFilesMd.concat(searchFileMd(pathAbsolute));
      } else {
        /* Is a file */
        if (mdExtension(pathAbsolute) === '.md')allFilesMd.push(pathAbsolute);
      }
    });
  } else if (mdExtension(route) === '.md') {
    allFilesMd.push(convertToAbsolute(route));
  }
  // console.log(allFilesMd, 28);
  return allFilesMd;
}

// /*---------------------7.Funcion que extrae links ---------------------*/
const mdFileLinks = (allfiles) => {
  const linksArray = [];
  searchFileMd(allfiles).forEach((file) => {
    const regularExpression = /\[(.*)\]\(((?!#).+)\)/gi;
    const carpeta = readFile(file).match(regularExpression);
      if (carpeta !== null) {
      const fileLinks = readFile(file).match(regularExpression).map((x) => x.split('](')[1].slice(0, -1));
      const filetext = readFile(file).match(regularExpression).map((x) => x.split('](')[0].slice(1));
          fileLinks.forEach((link, i) => {
          linksArray.push({
            href: link,
            text: filetext[i],
            file,
          });
        });
    }
  });
    return linksArray;
};

// /*--------------------8.Funcion que valida los links ---------------------*/

// const validateLinks = (arrlinks) => {
//   mdFileLinks(arrlinks).forEach((link)=>{
//     fetch(link.href)
//     .then((res) => {
//       const myStatus = res.status;
//       const myMessage = res.status !==200 ? "FAIL" : res.statusText;
//       const objProperties = {
//         ...arrlinks,
//       status: myStatus,
//       message: myMessage,
//       }
//       return objProperties;
//     })
//     .catch((rej) => {
//     const myStatus = "no status";
//     const myMessage = "FAIL";
//     const objProperties = {
//       ...arrlinks,
//       status: myStatus,
//       message: myMessage,
//     };
//     return objProperties;
//     });
//     })
//   }

// console.log(link.href);
// console.log(link.text);
// console.log(link.file);
// console.log(res.status);
// console.log(res.statusText);



// searchFileMd(userPath);
// console.log(mdFileLinks(userPath));
// validateLinks(userPath);

module.exports = {
validatePath,
searchFileMd,
mdFileLinks
};

// module.exports = () => {
//   // ...
// };


// function searchLinks (route) {
//   const allLinks = [];
//   searchFileMd(route).forEach((file) => {
//     const regExp = /\[(.*)\]\(((?!#).+)\)/gi;
//     const links = readFile(file).match(regExp).map((e) => e.split('](')[1].slice(0, -1));
//     const text = readFile(file).match(regExp).map((e) => e.split('](')[0].slice(1));
//   links.forEach((link, i) => {
//     allLinks.push({
//       href: link,
//       text: text[i],
//       file,
//     });
//   });
//   });
//   return console.log(allLinks);
// };
// const validateLinks = (arrlinks) => {
//   mdFileLinks(arrlinks).forEach((link)=>{
//     fetch(link.href)
//     .then((res) => {
//     if(res.status === 200) {
//     return {
//       href:link.href,
//       text:link.text,
//       file:link.file,
//       status:res.status,
//       ok:res.ok
//     }
//     }else if ((res.status === 404)) {
//       return {
//         href:link.href,
//         text:link.text,
//         file:link.file,
//         status:res.status,
//         ok:res.ok
//       }
//     }})
//     .catch(() => {
//     return {
//       href:link.href,
//       text:link.text,
//       file:link.file,
//       status:res.status,
//       ok:res.ok
//     }
//     })
//     })
//   }