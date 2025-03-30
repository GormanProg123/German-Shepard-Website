import "./styles/Content.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import news1 from "../../../../assets/images/news1.jpg";
import news2 from "../../../../assets/images/news2.jpeg";
import news3 from "../../../../assets/images/news3.jpg";

interface NewsItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const ContentFields = ({ limit }: { limit?: number }) => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const mockNews: NewsItem[] = [
      {
        id: 1,
        image: news1,
        title: "Первая новость",
        description: "Краткое описание первой новости...",
      },
      {
        id: 2,
        image: news2,
        title: "Вторая новость",
        description: "Краткое описание второй новости...",
      },
      {
        id: 3,
        image: news3,
        title: "Третья новость",
        description: "Краткое описание третьей новости...",
      },
      {
        id: 4,
        image: news1,
        title: "Четвертая новость",
        description: "Краткое описание четвертой новости...",
      },
      {
        id: 5,
        image: news2,
        title: "Пятая новость",
        description: "Краткое описание пятой новости...",
      },
      {
        id: 6,
        image: news3,
        title: "Шестая новость",
        description: "Краткое описание шестой новости...",
      },
      {
        id: 7,
        image: news1,
        title: "Седьмая новость",
        description: "Краткое описание седьмой новости...",
      },
      {
        id: 8,
        image: news2,
        title: "Восьмая новость",
        description: "Краткое описание восьмой новости...",
      },
      {
        id: 9,
        image: news3,
        title: "Девятая новость",
        description: "Краткое описание девятой новости...",
      },
    ];

    setNews(limit ? mockNews.slice(0, limit) : mockNews);
  }, [limit]);

  return (
    <div className="сontent-container">
      <div className="news-grid">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <img src={item.image} alt={item.title} className="news-image" />
            <h3 className="news-item-title">{item.title}</h3>
            <p className="news-item-desc">{item.description}</p>
            <NavLink to={`/news/${item.id}`} className="read-more">
              Читать далее →
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
