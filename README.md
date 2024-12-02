# Chessboard Color Change Project

This project is a chessboard simulation where you can change the color of the tiles on a chessboard by clicking on them. The color alternates between various states like black, white, yellow, and red. The project uses **React** for the frontend and **Redux** for state management.

---

## Features

- **Dynamic Chessboard**: The board is an 8x8 grid where each tile can be interacted with.
- **Color Changing Mechanism**: Each tile has an initial color. When clicked, it toggles between several colors (white, yellow, red, black).
- **State Management**: The state is managed using Redux, with each tile's state stored in the global Redux store.
- **Reusable Components**: The board and individual tiles are reusable components, making it easy to modify or extend the project.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A toolset for efficiently managing application state in React apps.
- **CSS (Tailwind CSS or custom styling)**: For styling the components and chessboard layout.

---

## Prerequisites

To run this project locally, you need to have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager) or **yarn**

---

## Steps to run locally

1. **Clone the repository**
   - Open your terminal and run the following command:
     ```
     git clone https://github.com/Meetz016/chessboard-redux.git
     ```

2. **Install dependencies**
   - Navigate to the project directory and install the necessary dependencies by running:
     ```
     npm install
     ```
     Or, if you are using yarn:
     ```
     yarn install
     ```

3. **Run the development server**
   - Start the development server with:
     ```
     npm run dev
     ```
     Or, with yarn:
     ```
     yarn dev
     ```

4. **Open the app**
   - After the development server starts, open your browser and go to:
     ```
     http://localhost:5173
     ```
     This will display the chessboard where you can interact with the tiles.

---

## Project Structure

- **src/**: Contains all the source code files.
  - **components/**: Contains React components like `Chessboard` and `Tile`.
  - **features/**: Contains Redux slices for managing the state of the chessboard.
  - **store.js**: The Redux store configuration.
  - **App.js**: The main app file that renders the components.
  - **index.js**: The entry point of the application.

---

## Contributing

Feel free to fork the project and create a pull request if you have any improvements or fixes!

---