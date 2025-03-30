import { useEffect, useState } from "react";
import "./styles/theme.css";
import lightLogo from "../../assets/icons/Sun.png";
import darkLogo from "../../assets/icons/Moon.png";
export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
      <img
        src={isDark ? lightLogo : darkLogo}
        alt="Theme Toggle"
        className="theme-icon"
      />
    </button>
  );
};
