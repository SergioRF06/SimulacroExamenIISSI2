# SimulacroExamenIISSI2

Descargue el .zip proyecto Silence origen desde esta actividad de la EV:

1. (+0,25) Creación entorno y arranque del Sitio Web. Cree la BD y haga los arreglos que necesite en la configuración para arrancar el servidor Web Silence, creando la BD (silence createdb).
   La vista SQL v_votes ofrece el valor promedio del voto de los usuarios a cada foto (Voto Público como media aritmética). Incluya el resultado de esta vista al final de este documento.
   Cree los módulos de acceso a la API Rest (silence createapi) para las tablas y la vista anterior.
   Arranque el servidor web y compruebe que se cargan todos los endPoints necesarios y se muestra la funcionalidad de la galería inicial de fotos (index.html) y detalles de la foto (photo_detail.html).  

Cree o modifique los controladores .js (vistas, renderizadores, módulos API) necesarios para que la vista photo_detail.html permita:

2. (+0,75) Usuario invitado (Guest).
   Un invitado debe ver el rating público de una foto, que es el promedio de cada foto (analice la vista SQL v_votes que lo resuelve y los métodos API que la manejan desde javaScript). Muestre dicho rating público para la foto seleccionada, en el caso de que haya votos para la misma. Un invitado no puede gestionar votos privados a una foto (ni añadir, ni modificar ni eliminar un voto), por lo que debe ocultarse la botonera de edición de votos (New, Update, Delete).
<img width="1211" height="323" alt="Pasted image 20260514190247" src="https://github.com/user-attachments/assets/32bea3a7-7e0f-4320-a00f-c5c5907af656" />

3. (+1) Usuario autentificado (como:  iissi/inma).
   Tiene acceso a la botonera de edición (New, Update, Delete) y al formulario para expresar su rating (entre 1 y 5) a la foto. Añada la funcionalidad para manejar el botón Update (Muestra el valor del voto privado al usuario conectado y permite modificarlo en la BD), controlando las excepciones por acceso a la BD mariaDB.

Verificación con el profesor. A medida que el alumno termine y pruebe cada apartado.

Soporte de la entrega del alumno.  Se comprimirá (.zip) todo el proyecto y se subirá a la actividad de este ejercicio junto con pantallas de código y pruebas que se añadirán a continuación de estas instrucciones.

Código y pantallas por apartados

    **********Insertar.…**********
