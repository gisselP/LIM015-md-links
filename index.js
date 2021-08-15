// module.exports = () => {
//   // ...
// };

const path = require ('path');
const userPath = process.argv[2];
const fs = require('fs');
const fetch = require('node-fetch');

/*------------------1.Funcion que comprueba si existe la ruta --------------*/
const checkExists = (route) =>fs.existsSync(route)

/*------------------2.Funcion que comprueba si la ruta es absoluta---------*/
const convertToAbsolute = (route) => path.resolve(route)

/*------------------3.Funcion que verifica si es directorio---------------*/
const itsDirectory = (route) => fs.statSync(route).isDirectory()

// /*------------------4.Funcion que verifica si es archivo-----------------*/
const itsFile = (route) => fs.statSync(route).isFile()

/*---------------------5.Funcion que verdifica si tiene archivos md---------*/
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

const mdFileLinks = (theLinks) => {
  const linksArray = [];
  const routeResolve = convertToAbsolute(theLinks);
  searchFileMd(routeResolve).forEach((file) => {
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

// /*---------------------Funcion que filtra archivos md ---------------------*/

const validarLinks = (links) => {
  mdFileLinks(links).forEach((file)=>{
    const linkHttp = file.href;
    fetch(linkHttp).then((res)=>{
    console.log(file.href);
    console.log(file.text);
    console.log(file.file);
    console.log(res.status);
    console.log(res.statusText);
  })
  })
}



console.log("existe:", checkExists(userPath));
searchFileMd(userPath);
// searchLinks(userPath);
mdFileLinks(userPath);
validarLinks(userPath);


/*---------------------5.Funcion que lee archivos----------------------*/


// function convertToAbsolutePath(ruta){
//   if(path.isAbsolute(ruta)){
//   console.log("es una ruta absoluta");
//   return ruta
//   }else{
//     console.log("no es una ruta absoluta");
//     return path.resolve(ruta);
// }}

//   function enterDirectory (ruta) {
//     const stats = fs.statSync(ruta);
//   if (stats.isDirectory(ruta)) {
//     console.log("La ruta es un directorio");
//   }else {
//     console.log("no es un directorio");
// }}

// function enterFile(ruta) {
//   const stats = fs.statSync(ruta);
//   if (stats.isFile(ruta)) {
//     console.log("La ruta es un archivo");
//   }else {
//     console.log("no es un archivo");
// }}

// function readElemnts () {
//   fs.readFile(ruta, "utf8", function(err, data){
//     if(err){
//       console.log("es un directorio");
//     }else{
//       console.log("el archivo contiene"+ data);
//     }
//   });

/*---------------------5.Funcion que lee el directorio----------------------*/

// const searchFileMd = (route) => {
// let allFileMd = [];

// if(itsFile(route) && mdExtension(route) === ".md"){
//   allFileMd.push(route);
//   }else if (itsDirectory(route)) {
//   const readDirectory = fs.readdirSync(route);
//   readDirectory.forEach((file)=>{
//     const filePath = path.join(route,file);
//     if(itsDirectory(filePath)){
//       allFileMd = allFileMd.concat(searchFileMd(filePath));
//     }else{
//       if(mdExtension(filePath) === ".md"){
//         allFileMd.push(filePath);
//       }
//     };
//   });
// }
// return console.log(allFileMd,48);
// }

// function fileReader(dir) {
//   let results = [];
//   if (fs.statSync(dir).isDirectory()) {
//     const list = fs.readdirSync(dir);
//     list.forEach((file) => {
//       const files = path.resolve(`${dir}/${file}`);
//       const stat = fs.statSync(files);
//       if (stat && stat.isDirectory()) {
//         /* Recurse into a subdirectory */
//         results = results.concat(fileReader(files));
//       } else {
//         /* Is a file */
//         if (path.extname(files) === '.md') results.push(files);
//       }
//     });
//   } else if (path.extname(dir) === '.md') {
//     results.push(path.resolve(dir));
//   }
//   console.log(results, 28);
//   return results;
// }
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
