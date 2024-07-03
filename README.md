# Pokémon App

Welcome to the Pokémon App! This project is built using Next.js, TypeScript, and Tailwind CSS. The app provides a user-friendly interface to browse and search for Pokémon.

## Features

- **Next.js**: A React framework for server-rendered applications and static websites.
- **TypeScript**: A statically typed superset of JavaScript to improve code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **useContext**: Utilized for state management to provide a cleaner and more efficient way to pass data through the component tree.
- **Debounce**: Implemented to improve the search functionality by limiting the rate at which the search function is called.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/iczky/Pokemon-Project.git
    cd Pokemon-Project
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Searching for Pokémon

The search bar allows users to search for their favorite Pokémon. The debounce feature ensures that the search function is not called too frequently, providing a smoother user experience.

### State Management

The app uses the `useContext` hook for state management. This approach simplifies the process of passing state and dispatch functions throughout the component tree, making the code more maintainable.

## Folder Structure


```lua
pokemon-app/
├── public/
│   ├── images/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── SearchBar.tsx
│   │   └── PokemonList.tsx
│   ├── context/
│   │   └── PokemonContext.tsx
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   └── pokemon/[id].tsx
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   └── debounce.ts
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```
