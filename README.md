# Prueba técnica FonYou
## _Jacob Isai Rodriguez Alfaro_

[https://1541r.github.io/fonyoutecnical/]( https://1541r.github.io/fonyoutecnical/)

Compatible con cualquier navegador que tengan compatibilidad, de preferencia, con Ecmascript 6.

## Details

- Escribir algún parametro de busqueda, ejemplo: rick, y precionar enter
- Seleccionar sobre cualquiera de los personajes que regresó la busqueda

## Issues

- Quedó inconclusa la parte del MenuItem, por lo que al dar click sobre los elementos de busqueda no manda el texto al input .
- Al refrescar el sitio manda error 404. 


## Installación

```
webpack.common.js
//publicPath: "./" //Descomentar en producción
```
```
package.json Reemplazar config/webpack.prod.js 
"build": "webpack --config config/webpack.dev.js", 

```
```
-npm install
-npm build
-npm start
````

