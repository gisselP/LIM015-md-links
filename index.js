// module.exports = () => {
//   // ...
// };

const path = require ('path');
const userPath = process.argv[2];
const fs = require('fs');

/*---------------------1.Funcion que comprueba si existe----------------------*/
function checkExists (route){
if(fs.existsSync(route)){
  console.log("si existe");
}else{
  console.log("no existe");
}}

/*---------------------2.Funcion que comprueba si la ruta es absoluta----------------------*/
const convertToAbsolute = (route) => path.resolve(route)


/*-------------------3.Funcion que verifica si es directorio o archivo--------------------*/
const itsDirectory = (route) => fs.statSync(route).isDirectory()

const itsFile = (route) => fs.statSync(route).isFile()


/*---------------------4.Funcion que comprueba si tiene archvos md----------------------*/
function mdExtension(route) {
  return path.extname(route)
}

/*---------------------5.Funcion que lee el directorio----------------------*/

function readDir (ruta) {
  fs.readdir(ruta, "utf8", function(err, data){
    if(err){
      console.log("no es un directorio");
    }else{
      console.log("el directorio contiene "+ data);
    }
  })
  }

checkExists(userPath);
console.log(convertToAbsolute(userPath));
console.log("es directorio:",itsDirectory(userPath));
console.log("es archivo:",itsFile(userPath));
console.log(mdExtension(userPath));
readDir(userPath);














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



