import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaVk,
} from "react-icons/fa";
import "../../styles/Footer.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contacts");
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-title">Надеждный друг</p>
          <p className="footer-description">
            Восточно-европейская овчарка - <br />
            надежный друг и защитник вашей семьи
          </p>
          <div className="footer-social">
            <a href="https://vk.com/club177816488" className="social-link">
              <FaVk />
            </a>
            <a
              href="https://www.instagram.com/nadeznydrug?igsh=MTVncW0zYWZrdDl4cQ=="
              className="social-link"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Навигация</h4>
          <ul className="footer-nav">
            <li>
              <a href="/" className="footer-link">
                Главная
              </a>
            </li>
            <li>
              <a href="/news" className="footer-link">
                Новости
              </a>
            </li>
            <li>
              <a href="/achievements" className="footer-link">
                Достижения
              </a>
            </li>
            <li>
              <a href="/gallery" className="footer-link">
                Галерея
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Наши Собаки</h4>
          <ul className="footer-nav">
            <li>
              <a href="/males" className="footer-link">
                Кобели
              </a>
            </li>
            <li>
              <a href="/females" className="footer-link">
                Суки
              </a>
            </li>
            <li>
              <a href="/puppies" className="footer-link">
                Щенки
              </a>
            </li>
            <li>
              <a href="/tips" className="footer-link">
                Советы владельцам
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Контакты</h4>
          <div className="footer-contact">
            <p>
              <FaPhone /> +375 29 123-45-67
            </p>
            <p>
              <FaEnvelope /> sheremeteva-natalya@mail.ru
            </p>
            <p>
              <FaMapMarkerAlt /> г. Полоцк, ул. Е.Полоцкой, 17а - 2
            </p>
            <button className="contact-btn" onClick={handleContactClick}>
              Связаться с нами
            </button>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <p className="footer-copyright">
        © 2025 Надёжный Друг. Все права защищены.
      </p>
    </footer>
  );
};
