# Pop-Corn 

## Description

This project is a film website that uses a variety of modern technologies to offer an interactive and dynamic experience. The site consists of four main sections:

1. **Home:** Renders the films brought in from the database.
2. **History of Cinema:** Information on the evolution and history of cinema.
3. **News:** Latest news related to cinema.
4. **Form:** It allows users to add new films to the database, which are then rendered in the film section.

## Technologies Used

- **HTML**
- **CSS**
- **Bootstrap**
- **JavaScript**
- **Express**
- **Node.js**
- **AJAX**
- **MongoDB**

## Functionalities

### Films Section in home

- Renders a list of movies retrieved from the MongoDB database.
- Each film shows relevant information such as title, director, year of release, etc..

### Film History Section

- It provides an overview of the history of cinema.
- It includes information on milestones and developments in the film industry.

### News Section

- Shows the latest news and updates from the world of cinema.
- News can be dynamically updated.

### Form Section

- Allows users to complete a form to add new movies.
- The form data is sent to the MongoDB database.
- Once a movie is added, it is automatically rendered in the movies section.

## Installation

To run this project on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TuUsuario/FilmsPage.git

2. **Navigate to the project directory:**
   ```bash
   cd FilmsPage

3. **Install the dependencies:**
   ```bash
   npm install

4. **Configure the database:**
  - Make sure you have MongoDB installed and running.
  - Create an .env file in the root of the project with the connection to your MongoDB database.
    
  ```bash
  MONGODB_URI=mongodb://localhost:27017/nombre-de-tu-bd
  ```

5. **Start the server:**
   ```bash
   npm start

6. **Open the project in your browser:**
   ```bash
   Go to http://localhost:3000 to see the application in action.

## Author

Created by **Marcos Pedro Lombardo**. If you have any questions, feel free to contact me.
