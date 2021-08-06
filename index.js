// module.exports = () => {
//   // ...
// };

const path = require ('path');
const userPath = process.argv[2];
const fs = require('fs');

/*---------------------Funcion que comprueba si existe----------------------*/
function checkExists (ruta){
if(fs.existsSync(ruta)){
  console.log("si existe");
}else{
  console.log("no existe");
}}

/*---------------------Funcion que comprueba si la ruta es absoluta----------------------*/
function convertAbsolutePath(ruta){
  if(path.isAbsolute(ruta)){
  console.log("es una ruta absoluta");
  return ruta
  }else{
    console.log("no es una ruta absoluta");
    return path.resolve(ruta);
}}

/*---------------------Funcion que comprueba si es directorio----------------------*/
  function enterDirectory (ruta) {
    const stats = fs.statSync(ruta);
  if (stats.isDirectory(ruta)) {
    console.log("La ruta es un directorio");
  }else {
    console.log("no es un directorio");
}}

function enterFile(ruta) {
  const stats = fs.statSync(ruta);
  if (stats.isFile(ruta)) {
    console.log("La ruta es un archivo");
  }else {
    console.log("no es un archivo");
}}

/*---------------------Funcion que lee el directorio----------------------*/
function readElemnts (ruta) {
fs.readdir(ruta, "utf8", function(err, data){
  if(err){
    console.log("no es un directorio");
  }else{
    console.log("el directorio contiene "+ data);
  }
})
}

checkExists(userPath);
convertAbsolutePath(userPath);
enterDirectory(userPath);
enterFile(userPath);
readElemnts(userPath);

// function readElemnts () {
// fs.readdir(ruta, "utf8", function(err, data){
//   if(err){
//     console.log("no es un directorio");
//   }else{
//     console.log("el archivo contiene "+ data);
//   }
// })
// }




// isDirectory (ruta);
// // isArchive(ruta);
// readElemnts(ruta);





