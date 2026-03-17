import React from "react";

function ThemeToggle({theme,setTheme}) {

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} style={{
      padding:"10px",
      borderRadius:"10px",
      cursor:"pointer"
    }}>
      {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;