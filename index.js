module.exports = () => {
  // ...
};

let path = require ('path');

let ruta = process.argv[2];

function isAbsolute (ruta){
if(path.isAbsolute(ruta)){
console.log("si es absoluta");
return ruta
}else{
  console.log("no es absoluta");
  return path.resolve(ruta);
}
}
isAbsolute(ruta);

