# Pop-Corn 

## Descripción

Este proyecto es un sitio web de cine que utiliza diversas tecnologías modernas para ofrecer una experiencia interactiva y dinámica. El sitio consta de cuatro secciones principales:

1. **Home:** Renderiza las películas traídas de la base de datos.
2. **Historia del Cine:** Información sobre la evolución y la historia del cine.
3. **Noticias:** Últimas noticias relacionadas con el mundo del cine.
4. **Formulario:** Permite a los usuarios añadir nuevas películas a la base de datos, que se muestran en la sección de películas.

## Tecnologías utilizadas

- **HTML**
- **CSS**
- **Bootstrap**
- **JavaScript**
- **Express**
- **Node.js**
- **AJAX**
- **MongoDB**

## Funcionalidades

### Sección de películas a domicilio

- Renderiza una lista de películas recuperadas de la base de datos MongoDB.
- Cada película muestra información relevante como título, director, año de estreno, etc..

### Sección de Historia del Cine

- Ofrece una visión general de la historia del cine.
- Incluye información sobre los hitos y la evolución de la industria cinematográfica.

### Sección de noticias

- Muestra las últimas noticias y novedades del mundo del cine.
- Las noticias pueden actualizarse dinámicamente.

### Sección del formulario

- Permite a los usuarios rellenar un formulario para añadir nuevas películas.
- Los datos del formulario se envían a la base de datos MongoDB.
- Una vez añadida una película, se muestra automáticamente en la sección de películas.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TuUsuario/FilmsPage.git

2. **Navegue hasta el directorio del proyecto:**
   ```bash
   cd FilmsPage

3. **Instalar las dependencias:**
   ```bash
   npm install

4. **Configurar la base de datos:**
  - Asegúrate de que tienes MongoDB instalado y funcionando.
  - Crea un archivo .env en la raíz del proyecto con la conexión a tu base de datos MongoDB.
    
  ```bash
  MONGODB_URI=mongodb://localhost:27017/nombre-de-tu-bd
  ```

5. **Iniciar el servidor:**
   ```bash
   npm start

6. **Abra el proyecto en su navegador:**
   ```bash
   Visite 'http://localhost:3000' para ver la aplicación en acción.

## Autor

Creado por **Marcos Pedro Lombardo**. Si tiene alguna pregunta, no dude en ponerse en contacto conmigo.
