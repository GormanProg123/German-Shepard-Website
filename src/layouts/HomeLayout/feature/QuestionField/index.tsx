import { NavLink } from "react-router-dom";
import "./styles/Question.css";

export const QuestionField = () => {
  return (
    <div className="container question-field-container reveal">
      <div className="question-field-inner-container">
        <div className="question-field-content">
          <div className="question-field-title">Остались вопросы?</div>
          <p className="question-field-subtitle">
            Свяжитесь с нами, чтобы получить консультацию или узнать о наличии
            щенков.
          </p>
          <div className="question-field-buttons">
            <NavLink
              to="/contacts"
              className="question-field-button primary-button"
            >
              Связаться
            </NavLink>
            <NavLink
              to="/puppies"
              className="question-field-button secondary-button"
            >
              Посмотреть щенков
            </NavLink>
          </div>
        </div>
        <div className="question-field-map">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=28.7582%2C55.4872%2C28.7602%2C55.4892&marker=55.4882%2C28.7592"
            width="600"
            height="400"
            style={{ border: "1px solid black" }}
            title="Полоцк, Ефросиньи Полоцкой 17а-2"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
