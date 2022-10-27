# Proyecto2
Descripción de LaLiga Santander Web

LaLiga Santander Web es un proyecto en el cual el usuario puede acceder a la clasificación, resultados y estadísticas de la Liga Española. 

Brinda al usuario acceso a las páginas web oficiales de los distintos equipos que conforman esta competición.

Para que el usuario disfrute y tenga un fácil acceso a las páginas web de los clubes, se situó en la parte superior de la web los escudos de cada club que al hacer click encima te lleva directo a la web oficial del club seleccionado. 



Funcionalidades:


Acceso a todas las páginas oficiales de los clubes de LaLiga Santander.

Acceso a la clasificación general de los equipos de LaLiga Santader, donde el usuario podrá visualizar en cualquier momento que puesto ocupa su equipo y si está en posición para acceder a las competiciones europeas como Champions League, Europa League o si está en posición de descenso a la Liga SmartBank.

Acceso a los resultados de todos los partidos de LaLiga Santander. El usuario puede filtrar los resultados en función del equipo que le interese, así como en función del resultado del mismo: ganados, empatados o perdidos.

Acceso a las redes sociales oficiales de LaLiga Santander (YouTube, Facebook, Instagram y Twitter).



Tecnologías empleadas:


HTML5 : utilizada para hacer la estructura de la página web.

CSS3 : utilizada para el diseño de la interfaz.

Bootstrap : utilizada para el diseño de la interfaz y al mismo tiempo creando una web responsive capaz de adaptarse y que pueda ser accesible desde cualquier dispositivo: tablets, smartphone, pc, etc..

JavaScript : utilizada para dar funcionalidad y dinamismo al sitio web en cuestión.

Postman : utilizada para obtener la información y los datos que se muestran en la web (utilizada inicialmente, hasta que se hizo el fetch directamente en los archivos JavaScript)

Git y GitHub : control de versiones y repositorio en remoto para trabajar en distintas líneas.



Descripción técnica:

Se han usado dos tipos de funcionalidades : genéricas y específicas.

Como funcionalidades genéricas podemos encontrar las siguientes funciones: getData(),crearTabla(), crearTabla(clasif).

getData() usada en todos los archivos JavaScript, es la función encargada de obtener los datos en tiempo real de la API, sin necesidad de usar el POSTMAN.

crearTabla() es la función encargada de crear la tabla con los equipos, cada vez que queremos filtrarlos por nombre del equipo, o bien los resultados: ganados, empatados, perdidos o próximos partidos. Interviene cada vez que es accionado alguno de los botones del filtro, pasándole un parámetro ú otro. Esta función se podría volver a usar si queremos hacer lo mismo con los equipos de las otras ligas, arriba mencionadas.

crearTabla(clasif) encargada de crear la tabla de clasificación de los equipos de LaLiga Santander, recogiendo datos como: posición, nombre del equipo, partidos jugados, partidos ganados, empatados o perdidos, goles marcados, goles recibidos, diferencia de goles y puntos totales. Se podría volver a usar para hacer la tabla de clasifiación de las otras ligas.


Como funcionalidades específicas podemos encontrar las siguiente funciones :

filtrarEquipos() esta función tiene 2 tareas :

1- filtrar los equipos por nombre con los datos introducidos por el usuario.

2- volver hacer otro filtro de la nueva array creada con los nombres del equipo en función de su resultado.

resetFilter() usada para resetear todos los filtros, limpiando el campo donde el usuario introduce el nombre de su equipo. Esta función se usa también en el caso de que alguna de las condiciones no se cumplen y al usuario le salta alguna alerta.


crearImg() encargada de recorrer el array de los equipos y añadir las imágenes de los clubes junto con su nombre y poder acceder directamente a la web oficial de cada club.

