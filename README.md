# PRUEBA MERCADO LIBRE - CHALLENGE MUTANTES
Este es el repositorio con el código solución para la prueba de ingreso a Mercado Libre,
el desafío de detección de mutantes, a continuación se definirá el proceso para la instalación 
y uso de la solución de software creada

## Características
se realizó la construcción de la solución de software utilizando el lenguaje de programación JavaScript,
utilizando el framework de trabajo [Node.js] y con ayuda de la librería [Express.js], además se hizo uso
de la librería para pruebas unitarias y de integración [Jest.js], además de pruebas de carga para el API
REST que se desarrolló con la ayuda de [K6] una herramienta para la ejecución de pruebas de carga.

## Instalación
Después de clonar el repositorio en un directorio local, existen 2 formas de desplegar la pieza de software
ya sea totalmente local o local en contenedores de Docker.

### Ejecución local sin Docker:
para esta ejecución se debe tener previamente un servidor de la base de datos MongoDB corriendo localmente en 
el puerto 27017 y con la base de datos "mutants" ya creada; en adición debe estar instalado [Node.js] localmente.
Debemos dirigirnos al directorio raíz del repositorio, estando allí podremos abrir el archivo index.js que se 
encuentra en la raíz del proyecto, en este archivo debemos cambiar la línea de código número 9, ya que en esta
línea sé instancia la conexión con la base de datos, para esto debemos cambiar la variable concatenada "Docker"
por la variable "local", definidas en el mismo archivo en las líneas 8 y 7 respectivamente, esto solamente altera
la dirección a la que apunta la conexión de base de datos.
Una vez hecho el cambio y guardado el archivo, con la ayuda de una consola navegamos hasta la raíz del repositorio 
luego ejecutaremos las siguientes líneas de código:
```sh
npm install
npm run start
```
## Ejecución en Contenedores Docker:
Para esta ejecución se debe tener previamente instalado [Docker] y [docker-compose].
Una vez clonado el repositorio, debemos dirigirnos al directorio raíz del mismo, allí podremos ejecutar en consola
lo siguiente
```sh
docker-compose up
```
Si queremos que los contenedores se suban y funcionen en modo independiente de la consola o terminal que se usa actualmente
debemos ejecutar lo siguiente
```sh
docker-compose up -d
```
## Pruebas:
Como se mencionó con anterioridad se hizo el testeo de la pieza de software para pruebas unitarias con ayuda de la librería
[Jest.js] que me permitió obtener los siguientes resultados:

File                       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------------|---------|----------|---------|---------|-------------------
All files                  |   98.93 |    97.56 |     100 |     100 |                   
 src                       |     100 |      100 |     100 |     100 |                   
  app.js                   |     100 |      100 |     100 |     100 |                   
 src/controllers           |   85.71 |    66.66 |     100 |     100 |                   
  dnaRegisterController.js |   85.71 |    66.66 |     100 |     100 | 12,20             
 src/middleware            |     100 |      100 |     100 |     100 |                   
  middleware.js            |     100 |      100 |     100 |     100 |                   
 src/models                |     100 |      100 |     100 |     100 |                   
  DNARegisters.js          |     100 |      100 |     100 |     100 |                   
 src/routes                |     100 |      100 |     100 |     100 | 
  routes.js                |     100 |      100 |     100 |     100 | 
 src/utils                 |     100 |      100 |     100 |     100 | 
  algorithms.js            |     100 |      100 |     100 |     100 | 
Test Suites: 2 passed, 2 total
Tests:       31 passed, 31 total
Snapshots:   0 total
Time:        2.375 s
Ran all test suites.

Para realizar la ejecución del test en la raíz del repositorio y sin tener el servidor en ejecución, pueden 
escribir en una consola o terminal esto:
```sh
npm run test
```
o para correr todos los datos del coverage, lo siguiente:
```sh
npm run coverage
```

## Licencia
MIT

[//]: #
   [Node.js]: <https://nodejs.org/en/>
   [Express.js]: <https://expressjs.com/>
   [Jest.js]: <https://jestjs.io/>
   [K6]: <https://k6.io/>
   [Docker]: <https://www.docker.com/>
   [docker-compose]: <https://docs.docker.com/compose/>