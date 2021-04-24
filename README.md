# Prueba Técnica - NodeJS Developer

el proyecto se inicializar el proyecto es necesario la ejecución de los siguiente comandos en la terminal del mismo.

* npm install -> instalar dependecias.
* npm run dev -> ejecutar proyecto en modo de desarrollo.
* npm run build -> compilar el proyecto para produccion.

el proyecto expone un endpoint en el cual es posible consultar la informacion de una moneda especifica, y siempre trae la moneda del dia actual

## http://localhost:4000/api/money/{moneType}/{date}
* moneType -> agregar moneda a consultar:  uf, utm , dolar
* date -> agregar fecha a consultar: 2021-3-15

### En caso de error
El endpoint principal en caso de no encotrar el valor de una moneda nos dara como respuesta un codigo 400 con un mensaje de error.