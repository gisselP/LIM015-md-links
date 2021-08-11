// module.exports = () => {
//   // ...
// };

const path = require ('path');
const userPath = process.argv[2];
const fs = require('fs');

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
function readFiles (route) {
  fs.readFile(route, "utf8", function(err, data){
    if(err){
      console.log("es un directorio");
    }else{
      console.log("el archivo contiene"+ data);
    }
  });
}
/*---------------------6.Funcion que filtra archivos md ---------------------*/
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
  console.log(allFilesMd, 28);
  return allFilesMd;
}


console.log("existe:", checkExists(userPath));
searchFileMd(userPath);
readFiles(userPath)


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