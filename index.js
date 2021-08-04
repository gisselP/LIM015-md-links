module.exports = () => {
  // ...
};

const path = require ('path');
const ruta = process.argv[2];
let fs = require('fs');

/*-------------------------Funcion que comprueba si la ruta es absoluta--------------------------*/
function isAbsolute (){
if(path.isAbsolute(ruta)){
console.log("es una ruta absoluta");
return ruta
}else{
  console.log("no es una ruta absoluta");
  return path.resolve(ruta);
}}

function isArchive () {
  const stats = fs.statSync(ruta);
if (stats.isFile() === true) {
  console.log("es un archivo");
}else {
  console.log("no es un archivo")
}}

function readElemnts () {
fs.readFile(ruta, "utf8", function(err, data){
  if(err){
    console.log("es un directorio");
  }else{
    console.log("el archivo contiene"+ data);
  }
});
}


isAbsolute(ruta);
isArchive(ruta);
readElemnts(ruta);

