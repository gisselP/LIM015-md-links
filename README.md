# Markdown Links

## Índice

- [Md-Links](#Md-Links)
- [Diagrama de flujo](#diagramas-de-flujo)
- [Modo de Uso](#modo-de-uso)
- [Instalación](#instalación)
---

## Md-Links 💻

Es una librería que verifica que todos los links en un archivo estén ok. Para esto la librería accede a distintos archivos o directorios para obtener sólo los que estén en formato `Markdown`. También reporta algunas estadísticas como la cantidad total de links, la cantidad de links únicos y la cantidad de links rotos.

## Diagramas de flujo 📌

Para poder implementar esta librería, se realizaron 2 diagramas de flujo.

![api-diagrama](src/images/api.png)

### CLI (Command Line Interface - Interfaz de Línea de Comando)

![cli-diagrama](src/images/cli.png)

## Modo de Uso ✒

#### Cuando sólo pones la ruta.

![prueba](src/images/prueba.png)

#### Cuando pones la ruta y --validate.

![prueba-validate](src/images/prueba-validate.png)

#### Cuando pones la ruta y --stats.

![prueba-stats](src/images/prueba-stats.png)

#### Cuando pones la ruta y --validate --stats.

![prueba-validate-stats](src/images/prueba-validate-stats.png)

#### Cuando pones mal la ruta.

![prueba-vacio](src/images/prueba-vacio.png)

#### Cuando pones mal la ruta.

![prueba-noexiste](src/images/prueba-noexiste.png)

#### Cuando pones bien la ruta pero mal las opciones.

![prueba-ayuda](src/images/prueba-ayuda.png)

### Instalación 📦
