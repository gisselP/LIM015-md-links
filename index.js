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

/*------------------4.Funcion que verifica si es archivo-----------------*/
const itsFile = (route) => fs.statSync(route).isFile()


/*---------------------4.Funcion que verdifica si tiene archivos md---------*/
const mdExtension = (route) => path.extname(route)

/*---------------------5.Funcion que lee el directorio----------------------*/
const readDirectory = (route) => fs.readdirSync(route)

/*---------------------6.Funcion que devuelve si es archivo o directorio----*/
const fileOrDir = (route) => {
  if(itsDirectory(route)){
    console.log("es un directorio");
  }else if (itsFile(route)){
    console.log("es un archivo");
  }
}


console.log("existe:",checkExists(userPath));
fileOrDir(userPath);




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
// const searchMdFiles = (route) => {
//    let allFileMd = [];
//   if(isFile(route)) {
//     if(mdExtension(route) === 'md') {
//       allFileMd.push(route);
//     }
//   }else{
//     fileandDirectories(route).forEach((files)=> {
//       const mdFilesInDirectory = searchMdFiles(files);
//       allFileMd=allFileMd.concat(mdFilesInDirectory);
//       console.log("mdFilesInDirectory");
//     })
//   }
//   return allFileMd;
//  };
 /*---------------------5.Funcion que lee archivos----------------------*/
//  const readFilePath = (route) => fs.readFileSync(route).toString();
// const extractMdDirectory = (route) => {
//   let allFileMd = [];
//   const readDirectory = fs.readdirSync(route);
//   for(let i = 0; i < readDirectory.length; i++) {
//     const file = path.join(route, readDirectory[i]);
//     if(isDirectory(file)) {
//       allFileMd= allFileMd.concat(extractMdDirectory(file));
//     }else if (mdExtension(file) === 'md'){
//       allFileMd.push(file);
//     }
//   }
//   return allFileMd;
// }