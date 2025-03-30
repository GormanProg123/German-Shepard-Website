import { ContentFields } from "../../../NewsLayout/feature/СontentFields";
import "./styles/news.css";
import { NavLink } from "react-router-dom";

export const NewsDescription = () => {
  return (
    <div className="news-container">
      <div className="news-content">
        <div className="latest-events">Последние события</div>
        <h2 className="news-title">Новости и события</h2>
        <p className="news-subtitle">
          Будьте в курсе последних событий и новостей нашего клуба
        </p>

        <div className="news-content-wrapper">
          <ContentFields limit={3} />
        </div>

        <NavLink to="/news" className="all-news-button">
          Все новости
        </NavLink>
      </div>
    </div>
  );
};
