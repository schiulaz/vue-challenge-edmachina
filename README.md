# vue app (edmachina-challenge)

Proyecto desarrollado bajo Vue 3 y Quasar, por su amplia variedad de componentes y la versatilidad de uso que poseen, adaptándose al desafío planteado, que incluye el diseño de una de las páginas de la app.


Al mismo tiempo creo que puede ser útil en el desarrollo del resto de las pantallas. En la compañia actual solemos usar Quasar para los proyectos que corren bajo Vue 3, además de alguna librería complementaria para manejo de gráficos. A los fines de este ejercicio, eso ya no era necesario, pero comparten en cierto punto el rubro y el negocio y con Quasar nos hemos acoplado bien y cumple los requerimientos de una app del rubro, reduciendo los tiempos de desarrollo.


Para la resolución, se optó por un SPA base con implementación modularizada de tal forma que se pueda ir agragando funcionalidad, stores, paginas y componentes, o eventuales composables a la misma. Se integró además Axios para eventuales llamados a la API, y moment para manejo y control de fechas, muy usado en CRMs de este estilo.


Los datos que llenan la pantalla son obtenidos a partir de archivos json (src/json)) a modo de simulación de resultados entregados por una falsa API. Obviamente, en la aplicación real se deberá persistir la información, hacer uso del store (bajo Vuex en este caso) y uso de buenas practicas a la hora del armado de componentes, para volverlos reutilizables y lograr una app escalable y con mejor mantenimiento (caso de tabs por ej.). A la hora de dockerizar, se encuentra un eventual dockerfile, aclarando que no tengo gran manejo con Docker (punto a mejorar).

# tecnologías usadas


-Vue 3

-Vue-Router

-Vuex

-Moment

-Axios(*)


*sin implementar ya que no hay api desarrollada para consumir. Estaba la intención de armar algo con JSON SERVER y modelar mejor la obtención de datos, pero no dieron los tiempos sinceramente:().


## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npm run dev
```


### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
