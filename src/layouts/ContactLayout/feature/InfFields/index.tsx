import "./styles/Inf.css";
import {
  FaVk,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const InfFields = () => {
  return (
    <div className="inf-container">
      <div className="info-table">
        <h2 className="info-title">Наши контакты</h2>
        <p className="info-subtitle">Мы всегда рады ответить на ваши вопросы</p>

        <div className="contact-info">
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span className="contact-text">+375 29 123-45-67</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span className="contact-text">sheremeteva-natalya@mail.ru</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span className="contact-text">
              г. Полоцк, ул. Е.Полоцкой, 17а - 2
            </span>
          </div>
        </div>

        <p className="social-title">Мы в социальных сетях</p>
        <div className="social-icons">
          <a href="https://vk.com/club177816488" className="social-button">
            <FaVk className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/nadeznydrug?igsh=MTVncW0zYWZrdDl4cQ=="
            className="social-button"
          >
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>

      <div className="form-table">
        <h2 className="form-title">Напишите нам</h2>
        <p className="form-subtitle">Заполните форму, и мы свяжемся с вами</p>

        <form className="contact-form">
          <label htmlFor="name">Имя</label>
          <input type="text" id="name" placeholder="Введите ваше имя" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Введите ваш email" />

          <label htmlFor="phone">Телефон</label>
          <input type="tel" id="phone" placeholder="Введите ваш телефон" />

          <label htmlFor="subject">Тема</label>
          <input type="text" id="subject" placeholder="Введите тему" />

          <label htmlFor="message">Сообщение</label>
          <textarea id="message" placeholder="Ваше сообщение"></textarea>

          <button type="submit" className="submit-button">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};
