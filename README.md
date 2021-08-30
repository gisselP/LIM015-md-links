# Markdown Links

## Índice

- [1. Md-Links](#1-md-Links)
- [2. Diagrama de flujo](#2-diagramas-de-flujo)
- [3. Modo de Uso](#3-modo-de-uso)
- [4. Instalación](#4-instalación)
---
- [1. Preámbulo](#1-preámbulo)

## Md-Links 💻

Es una librería que verifica que todos los links en un archivo estén ok. Para esto la librería accede a distintos archivos o directorios para obtener sólo los que estén en formato `Markdown`. También reporta algunas estadísticas como la cantidad total de links, la cantidad de links únicos y la cantidad de links rotos.

## Diagramas de flujo 📌

Para poder implementar esta librería, se realizaron 2 diagramas de flujo.

![api-diagrama](images/api.png)

### CLI (Command Line Interface - Interfaz de Línea de Comando)

![cli-diagrama](images/cli.png)

## Modo de Uso ✒

#### Cuando sólo pones la ruta.

![prueba](images/prueba.png)

#### Cuando pones la ruta y --validate.

![prueba-validate](images/prueba-validate.png)

#### Cuando pones la ruta y --stats.

![prueba-stats](images/prueba-stats.png)

#### Cuando pones la ruta y --validate --stats.

![prueba-validate-stats](images/prueba-validate-stats.png)

#### Cuando pones mal la ruta.

![prueba-vacio](images/prueba-vacio.png)

#### Cuando pones mal la ruta.

![prueba-noexiste](images/prueba-noexiste.png)

#### Cuando pones bien la ruta pero mal las opciones.

![prueba-ayuda](images/prueba-ayuda.png)

### Instalación 📦
