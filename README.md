# Mdlinks-meme (ง ͠° ͟ل͜ ͡°)ง 

## 1. Md-links 💻

Es una librería que verifica que todos los links en un archivo estén ok. Para esto la librería accede a distintos archivos o directorios para obtener sólo los que estén en formato `Markdown`. También reporta algunas estadísticas como la cantidad total de links, la cantidad de links únicos y la cantidad de links rotos.

## 2. Diagramas de flujo 📌

Para poder implementar esta librería, se realizaron 2 diagramas de flujo.

![api-diagrama](images/api.png)

### CLI (Command Line Interface - Interfaz de Línea de Comando)

![cli-diagrama](images/cli.png)

## 3. Modo de Uso ✒

#### Cuando sólo pones la ruta.

![prueba](images/prueba.png)

#### Cuando pones la ruta y --validate.

![prueba-validate](images/prueba-validate.png)

#### Cuando pones la ruta y --stats.

![prueba-stats](images/prueba-stats.png)

#### Cuando pones la ruta y --validate --stats.

![prueba-validate-stats](images/prueba-validate-stats.png)

#### Cuando la ruta no tiene links.

![prueba-vacio](images/prueba-vacia.png)

#### Cuando pones mal la ruta.

![prueba-noexiste](images/prueba-noexiste.png)

#### Cuando pones bien la ruta pero mal las opciones.

![prueba-ayuda](images/prueba-ayuda.png)

### 4. Instalación 📦

```js
npm install mdlinks-meme.
```