# YachayWasi-Perú 🖱️


## Resumen del proyecto

Yachaywasi, es una red social que busca facilitar y promover el acceso a información, contenidos educativos, y sobre todo una mayor difusión del espacio Aprendo en Casa, la modalidad de clases no presenciales dispuestas por el Gobierno del Perú y el Ministerio de Educación, como medidas de prevención ante la pandemia del Covid-19 en el país.

## Definición del usuario y primeros pasos

### ¿Quiénes son los principales usuarios del producto?

Los principales usuarios de esta Red Social son Alumn@s, Maestr@s tanto del nivel inicial, primaria y secundaria, además de los Padres de Familia con hijos en etapa escolar.

### ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Los usuarios podrán en primera instancia, acceder a la red social mediante la creación de una cuenta.
Los usuarios podrán escribir, leer, actualizar y eliminar datos de las publicaciones que realicen, asimismo podrán comentar publicaciones hechas por otros usuarios.

## Historias de Usuario

#### Historia 1: Como usuario nuevo debo poder crear una cuenta con email y password válidos para poder iniciar sesion e ingresar a la red social.

* CRITERIOS DE ACEPTACIÓN:
- El usuari@ tendrá un espacio para digitar su correo y contraseña para crear su cuenta.
- Conectar los formularios con Firebase
- El usuario visualizara un mensaje de error, si su email o password ingresado es inválido.
- El diseño debe ser mobile first ( acomodable en desktop)

* DEFINICIÓN DE TERMINADO:
- La funcionalidad cumple satisface los criterios de aceptación.
- Código revisado por la coach.
- Funcionalidad desplegada en Github.
- Test Unitario.
- Historia de usuario incluida en el readme.
- El diseño visual corresponde al prototipo de alta fidelidad.
- Usar linter como una buena practica.
- Test de usabilidad completado (directamente al usuario objetivo).

## Prototipo versión Mobile
![prototipo H1-MOBILE](https://user-images.githubusercontent.com/60890508/88619223-a3b1d580-d060-11ea-8f9b-06511cf14bb3.png)

## Prototipo versión Desktop
![prototipo H1-DESKTOP](https://user-images.githubusercontent.com/60890508/88619282-cfcd5680-d060-11ea-8ab8-1db994847609.png)


#### Historia 2: Como usuario nuevo debo poder tener la opción de iniciar sesión con mi cuenta de Google o Facebook para ingresar a la red social sin necesidad de crear una cuenta de email válido.

* CRITERIOS DE ACEPTACIÓN:
- El usuari@ podrá elegir la opción de login entre Google o facebook.
- Solicitar permisos a firebase para poder acceder a cualquiera de las opciones que el usuari@ seleccione.
- Firebase valida los permisos solicitados para que el usuario ingrese a la opción seleccionada.

* DEFINICIÓN DE TERMINADO:
- La funcionalidad cumple satisface los criterios de aceptación.
- Código revisado por la coach.
- Funcionalidad desplegada en Github.
- Test Unitario.
- Historia de usuario incluida en el readme.
- El diseño visual corresponde al prototipo de alta fidelidad.
- Usar linter como una buena practica.
- Test de usabilidad completado (directamente al usuario objetivo).

## Prototipo versión Mobile
![prototipo H2-MOBILE](https://user-images.githubusercontent.com/60890508/88619415-1cb12d00-d061-11ea-9f0a-ee8c86fbd468.png)

## Prototipo versión Desktop
![prototipo H2-DESKTOP](https://user-images.githubusercontent.com/60890508/88619457-3488b100-d061-11ea-8eef-8d1a056631ff.png)

#### Historia 3: Como usuario loggeado debo poder crear, guardar, modificar en el mismo lugar (in place) y eliminar una publicación (post) privada o pública, que puede ser una frase o una imagen.

* CRITERIOS DE ACEPTACIÓN:
- El usuari@ visualizará una caja donde podrá escribir, para crear una publicación.
- Se necesita al menos un caracter para que el boton PUBLICAR se active y se pueda realizar la publicación.
- El usuari@ tendrá la opción de publicar una imagen.
- El usuari@ tendrá la opción de modificar una publicación (post).
- El usuari@ tendrá la opción de eliminar una publicación (post).
- El usuari@ podrá configurar una publicación como pública o privada, según lo crea conveniente.

* DEFINICIÓN DE TERMINADO:
- La funcionalidad cumple satisface los criterios de aceptación.
- Código revisado por la coach.
- Funcionalidad desplegada en Github.
- Test Unitario.
- Historia de usuario incluida en el readme.
- El diseño visual corresponde al prototipo de alta fidelidad.
- Usar linter como una buena practica.
- Test de usabilidad completado (directamente al usuario objetivo).
## Prototipo versión Mobile
![prototipo H3-MOBILE](https://user-images.githubusercontent.com/60890508/88619678-bd9fe800-d061-11ea-9361-86367288d879.png)

## Prototipo versión Desktop
![prototipo H3-DESKTOP](https://user-images.githubusercontent.com/60890508/88619726-d9a38980-d061-11ea-94ad-e4b9285e4cda.png)

#### Historia 4: Como usuario loggeado debo poder ver todos los posts públicos y privados que he creado hasta ese momento, desde el más reciente hasta el más antiguo, así como la opción de poder cambiar la configuración de privacidad de mis post.

* CRITERIOS DE ACEPTACIÓN:
- Cuando el usuari@ haga alguna publicación (publica o privada), se creará un historial de publicaciones en su perfil y las podrá visualizar todas.
- El historial de sus publicaciones del usuari@, aparecerá de manera ascendente (del mas reciente al mas antiguo).
- El usuari@ podrá cambiar la consiguración de privacidad (publico/privado) de sus publicaciones compartidas anteriormente.

* DEFINICIÓN DE TERMINADO:
- La funcionalidad cumple satisface los criterios de aceptación.
- Código revisado por la coach.
- Funcionalidad desplegada en Github.
- Test Unitario.
- Historia de usuario incluida en el readme.
- El diseño visual corresponde al prototipo de alta fidelidad.
- Usar linter como una buena practica.
- Test de usabilidad completado (directamente al usuario objetivo).

## Prototipo versión Mobile
![prototipo H4-MOBILE](https://user-images.githubusercontent.com/60890508/88619817-0bb4eb80-d062-11ea-906e-51ee16b8e5a9.png)

## Prototipo versión Desktop
![prototipo H4-DESKTOP](https://user-images.githubusercontent.com/60890508/88619847-20917f00-d062-11ea-9dc7-5c53808c0121.png)

#### Historia 5: Yo como usuario loggeado, puedo dar like y llevar un conteo de likes en mi publicación así como poder escribir, guardar, editar o eliminar un comentario en mi publicación.

* CRITERIOS DE ACEPTACIÓN:
- Al realizar alguna publicación, se generará un botón de likes por defecto. (inicializado en 0).
- El usuario podrá clickear el botón de likes.
- El botón de Likes tendrá un contador, el cual aumentará cada vez que se le dé click.
- El usuari@ podrá comentar cualquier publicación y subirlo.
- El usuari@ podrá editar sus comentarios hechos en alguna publicación.
- El usuari@ podrá eliminar sus comentarios hechos en alguna publicacion.
- El usuari@ podrá eliminar los comentarios hechos a su publicación.

* DEFINICIÓN DE TERMINADO:
- La funcionalidad cumple satisface los criterios de aceptación.
- Código revisado por la coach.
- Funcionalidad desplegada en Github.
- Test Unitario.
- Historia de usuario incluida en el readme.
- El diseño visual corresponde al prototipo de alta fidelidad.
- Usar linter como una buena practica.
- Test de usabilidad completado (directamente al usuario objetivo).

## Prototipo versión Mobile
![prototipo H5-MOBILE](https://user-images.githubusercontent.com/60890508/88619938-546ca480-d062-11ea-8e19-046fb2bf2a64.png)

## Prototipo versión Desktop
![prototipo H5-DESKTOP](https://user-images.githubusercontent.com/60890508/88619953-63ebed80-d062-11ea-9b52-0bea193950c8.png)

#### Historia 6: Al final debo poder ingresar a la red social y poder visualizar los datos de mi perfil creado o editarlos.

* CRITERIOS DE ACEPTACIÓN:
- El usuari@ registrado ,podrá editar nombre en el perfil.
- El usuari@ podrá subir su foto de perfil.
- El usuari@ podra cambiar la foto de perfil en cualquier momento.
- El usuari@ podra eliminar la foto de perfil escogida.
- El usuari@ podrá elegir opciones (maestro/alumno) al momento de editar su perfil academico.
- El usuari@ tendrá un espacio para completarlo con una pequeña descripción.

* DEFINICIÓN DE TERMINADO:
- La funcionalidad cumple satisface los criterios de aceptación.
- Código revisado por la coach.
- Funcionalidad desplegada en Github.
- Test Unitario.
- Historia de usuario incluida en el readme.
- El diseño visual corresponde al prototipo de alta fidelidad.
- Usar linter como una buena practica.
- Test de usabilidad completado (directamente al usuario objetivo).

## Prototipo versión Mobile
![prototipo H6-MOBILE](https://user-images.githubusercontent.com/60890508/88620005-82ea7f80-d062-11ea-89f1-2733e29cd9cb.png)

## Prototipo versión Desktop
![prototipo H6-DESKTOP](https://user-images.githubusercontent.com/60890508/88620032-95fd4f80-d062-11ea-9ec6-a7ad4bdf0cdc.png)


## Link para visualizar los prototipos de alta fidelidad en Figma para móvil.
[VER 👉 FIGMA] (https://www.figma.com/file/dUJn3uXiX60FTgDgkMaIix/Untitled?node-id=0%3A1)

*******************************************************************************


## Objetivos de aprendizaje

Antes de empezar el proyecto, recuerda agregar tus objetivos de aprendizaje pendientes de tu proyecto
anterior en la siguiente sección.

### Objetivos de aprendizajes pendientes


### HTML y CSS

* [ ] [HTML semántico](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] [CSS `flexbox`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM y Web APIs

* [ ] [Manipulación dinámica del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
* [ ] [History API](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
* [ ] [`localStorage`]

### Javascript

* [ ] [Uso de callbacks](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
* [ ] Uso ES modules
([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))

### Firebase

* [ ] [Firestore](https://firebase.google.com/docs/firestore)
* [ ] [Firebase Auth](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules](https://firebase.google.com/docs/rules)
* [ ] [Uso de onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen)
| [onAuthStateChanged](https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data)

### Testing

* [ ] [Testeo de tus funciones](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Mocking](https://jestjs.io/docs/es-ES/manual-mocks)

### Colaboración en Github

* [ ] Branches
* [ ] Pull Requests
* [ ] Tags

### Organización en Github

* [ ] Projects
* [ ] Issues
* [ ] Labels
* [ ] Milestones

### Buenas prácticas de desarrollo

* [ ] Modularización
* [ ] Nomenclatura / Semántica
* [ ] Linting

***

## Recursos

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre ellas.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firestore](https://firebase.google.com/docs/firestore) o de forma
local utilizando`localStorage`.

### Autenticación y autorización

Hasta el momento, los proyectos han sido pensados como recursos públicos, donde todos
los usuarios compartían un mismo rol y la misma información.

En este proyecto tendrás que diferenciar la información a mostrar y modificar,
dependiendo de la identidad del usuario.
De la misma manera deberás crear reglar de autorización para el acceso a los
datos.

Para esto utilizaras respectivamente
[`Firebase authentication`](https://firebase.google.com/docs/auth/) y
[`Firestore security rules`](https://firebase.google.com/docs/firestore/security/get-started)

### CSS

En este proyecto queremos que ganes confianza y experiencia con CSS profesional,
por eso usarás [`flexbox`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
para posicionar tus elementos.

Recuerda que no puedes usar frameworks CSS, sólo *vanilla css* o [*sass*](https://sass-lang.com/).

### Otras:

* [Pildora SPA](https://www.loom.com/share/fa63a8ad0e9a43428222c15b6f6613d3)
* [Repositorio de pildora de SPA](https://github.com/betsyvies/bootcamp-spa)
* [Pildora de mock Firebase](https://www.youtube.com/watch?v=06myVn41OTY&t=1s)
* [Repositorio de pildora de mock Firebase](https://github.com/Danielalab/2018-2-Testing)
* [Pildora MVC](https://github.com/merunga/todomvc-vanillajs)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)

***
