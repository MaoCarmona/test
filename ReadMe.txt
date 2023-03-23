Para correr la en local , se deben seguir los siguientes pasos :
Requisitos:
    - XAMPP
    - HeidiSQL o un administrador de bases de datos cualquiera
    - Node js - npm


1.Iniciar un servidor en local (Yo utilice XAMPP para correr Apache y Mysql) 
2.Abrir un administrador de bases de datos (Yo utilice HeidySql)
    y ejecutar la consulta Sql que se encuentra en el archivo dbSql.txt para crear la base de datos con sus tablas
    - En el archivo configDatabase.js se encuentran las configuraciones de acceso a la base de datos,
        la ruta del archivo es : src\database\configDatabase.js
3.luego en el proyecto desarrollado en node js, se ubica en la carpeta raiz (test_digitaxi)
    y por consola ejecuta el comando "npm run dev" y listo estara en funcionamiento la api en local

Nota: Para verificar cada uno de los endpoints desarrollados, se ha creado un swagger
al cual puede acceder copiando el siguiente enlace : http://localhost:3000/docs/  despues de ejecutar los pasos anteriores
