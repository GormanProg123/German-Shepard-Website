import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle";
import "../../styles/Header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <ThemeToggle />
        </div>
        <div className="header-right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>
        <nav className={menuOpen ? "open" : ""}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Новости
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/achievements"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Достижения
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/males"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Кобели
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/females"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Суки
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/puppies"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Щенки
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tips"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Советы владельцам
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Галерея
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
