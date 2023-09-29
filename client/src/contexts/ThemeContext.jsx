/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }){
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      // Check if the theme is not set
      if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "light");
      } else{
        getCurrentMode();
      }
  
      darkClassToggle();
    },[]);
  
    // This function adds or removes the dark class on the document
    const darkClassToggle = () => {
      // On page load add or remove the dark from the document
      if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
  
    // This toggles the mode of the thems
    const toggleDarkMode = () => {
      if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
        setDarkMode(false);
      } else {
        localStorage.setItem("theme", "dark");
        setDarkMode(true);
      }
  
      darkClassToggle();
    };

    // This gets the current mode of the theme
    const getCurrentMode = () => {
      if (localStorage.getItem("theme") === "dark") {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }

      darkClassToggle();
    }

    return(
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
    
}