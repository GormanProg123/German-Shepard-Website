import "./styles/MDog.css";
import { NavLink } from "react-router-dom";
import dog1 from "../../../../assets/images/dog1.jpg";

export const maleDogsData = [
  {
    id: 4,
    name: "Барон",
    age: "3 года",
    image: dog1,
    features: ["Мощный", "Послушный"],
  },
  {
    id: 5,
    name: "Макс",
    age: "2 года",
    image: dog1,
    features: ["Ласковый", "Энергичный"],
  },
  {
    id: 6,
    name: "Шерлок",
    age: "4 года",
    image: dog1,
    features: ["Хитрый", "Умный"],
  },
  {
    id: 7,
    name: "Гром",
    age: "3 года",
    image: dog1,
    features: ["Хороший охранник", "Спокойный"],
  },
  {
    id: 8,
    name: "Ричард",
    age: "5 лет",
    image: dog1,
    features: ["Преданный", "Обучаемый"],
  },
  {
    id: 9,
    name: "Цезарь",
    age: "2 года",
    image: dog1,
    features: ["Активный", "Добрый"],
  },
];

export const MaleDogField = () => {
  return (
    <div className="male-dogs-container">
      <div className="male-dogs-grid">
        {maleDogsData.map((dog) => (
          <div className="male-dog-item" key={dog.id}>
            <img
              src={dog.image}
              alt={`Собака ${dog.name}`}
              className="male-dog-image"
            />
            <div className="male-dog-info">
              <p className="male-dog-name-age">{`${dog.name}, ${dog.age}`}</p>
              <div className="male-dog-features">
                {dog.features.map((feature, index) => (
                  <span className="male-dog-feature" key={index}>
                    {feature}
                  </span>
                ))}
              </div>
              <NavLink to={`/dog/${dog.id}`} className="male-read-more">
                Подробнее →
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
