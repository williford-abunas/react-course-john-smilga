import {
  createContext,
  useContext,
  useState,
  useEffect,
  Children,
} from "react";
const AppContext = createContext();

const getInitialTheme = () => {
  const prefersDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const storedTheme = localStorage.getItem("dark-theme");

  if (storedTheme !== null) {
    return storedTheme === "true";
  }
  return prefersDarkTheme;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme());
  const [searchQuery, setSearchQuery] = useState("dogs");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("dark-theme", newDarkTheme);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchQuery, setSearchQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
