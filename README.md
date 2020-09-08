# Code challange

#### Primeros pasos:

Sigue la [documentación de nextjs](https://nextjs.org/docs) para crear un proyecto llamado app, la estructuras de carpeta deberá quedar así:

```
.
+-- api
+-- app.
```

Después deberas añadir typescript al proyecto, en la documentación de nextjs se explica como. 
En la carpeta de api hay otro README en el que podrás ver como arracar el api.

### Tecnología obligatoria

- [nextjs] - The React Framework for Production.
- [Typescript] - Typed JavaScript at Any Scale.
- [Redux] - Redux is a predictable state container for JavaScript apps.

### Tecnología que nosotros usamos que podrían serte de utilidad, pero no son obligatorias.

- [Ramda] - A practical functional library for JavaScript programmers.
- [react-hook-form] - Performant, flexible and extensible forms with easy-to-use validation.
- [react-table] - Hooks for building lightweight, fast and extendable datagrids for React
- [Jest] - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [Cypress] - Fast, easy and reliable testing for anything that runs in a browser.
- [redux thunk] - Thunk middleware for Redux.
- [styled components] - Use the best bits of ES6 and CSS to style your apps without stress

# Features
La api para poder realizar la prueba está en `/api`, en su README.md encontrarás la documentación necesaria para inicializarla.
Se valorará positivamente:
- Testing ([jest] y [cypress])

#### Pantalla de usuarios:
- Como usuario necesito poder visualizar en una tabla los usuarios del sistema. Los campos que necesito visualizar son:
  - id
  - nombre
  - apellido
  - email
  - roles. 
- La tabla debe tener paginación de un máximo de 10 usuarios por página.

#### Crear usuarios:

Como usuario necesito poder crear nuevos usuarios.
Desde la pantalla de usuarios se deberá añadir un enlace al formulario de nuevo usuario. 
Campos y validaciones: 
- nombre: string minimo 2 caracteres requerido
- apellidos: string minimo 2 cracteres no requerido
- email: email valido requerido
- roles: minimo uno requerido

Cuando cree un usuario deberia redirigirme al detalle de este. 

#### Detalles del usuario:
Como usuario necesito poder visualiza los datos de un usuario en concreto. 
Los campos que necesito visualizar son id, nombre, apellido, email y los roles. 

#### Editar usuario:

Como usuario quiero poder editar un usuario creado cuando estoy en la pantalla de detalle. 
Los campos editables deben ser nombre, apellido y roles. 
Debo tener un botón para confirmar la edición que sólo estará habilitado cuando haya cambiado algún campo. 
Campos y validaciones: 

- nombre: string minimo 2 caracteres no requerido
- apellidos: string minimo 2 cracteres no requerido
- roles: minimo uno no requerido

#### Borrar usuario

Como usuario quiero poder borrar otro usuario del listado, desde la tabla o desde el detalle de este. 
Cuando elimine un usuario desde el detalle quiero volver a la pantalla de usuarios manteniendo la paginación. 
Cuando elimine un usuario desde el listado debe mantener la paginación que ya tenía.

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[nextjs]: https://nextjs.org/
[typescript]: https://www.typescriptlang.org
[ramda]: https://ramdajs.com/docs
[redux]: https://redux.js.org/
[jest]: https://jestjs.io
[react-hook-form]: https://react-hook-form.com/api/
[react-table]: https://github.com/tannerlinsley/react-table
[cypress]: https://www.cypress.io/
[redux thunk]: https://github.com/reduxjs/redux-thunk
[styled components]: https://styled-components.com/
