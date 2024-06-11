# My Book Search App

This is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Features

- Search for books using the Open Library API.
- Real-time search results with debouncing.
- Add books to a personal bookshelf stored in localStorage.
- View the personal bookshelf on a separate page.

## Setup

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/my-book-search-app.git
   cd my-book-search-app
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed.

   ```bash
   npm install
   ```

3. **Install Tailwind CSS:**

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Configure Tailwind CSS:**

   Update the `tailwind.config.js` file:

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

   Update `src/index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Install React Router:**

   ```bash
   npm install react-router-dom
   ```

6. **Install React Spinners (Optional, if using a spinner library):**

   ```bash
   npm install react-spinners
   ```

## Running the Application

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Open your browser:**

   Navigate to `http://localhost:5173` (or the URL provided by the development server).

## Dependencies

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Spinners](https://www.davidhu.io/react-spinners/) (Optional)
- [Vite](https://vitejs.dev/)

## Contributing

Feel free to submit issues and pull requests. We welcome all contributions to improve this project!
