import "./styles/FDogs.css";
import { NavLink } from "react-router-dom";
import dog2 from "../../../../assets/images/dog2.jpg";

export const femaleDogsData = [
  {
    id: 10,
    name: "Луна",
    age: "3 года",
    image: dog2,
    features: ["Грациозная", "Добрая"],
  },
  {
    id: 11,
    name: "Белла",
    age: "2 года",
    image: dog2,
    features: ["Активная", "Послушная"],
  },
  {
    id: 12,
    name: "Айси",
    age: "4 года",
    image: dog2,
    features: ["Ласковая", "Интеллигентная"],
  },
  {
    id: 13,
    name: "Веста",
    age: "3 года",
    image: dog2,
    features: ["Быстрая", "Осторожная"],
  },
  {
    id: 14,
    name: "Снежка",
    age: "5 лет",
    image: dog2,
    features: ["Преданная", "Терпеливая"],
  },
  {
    id: 15,
    name: "Злата",
    age: "2 года",
    image: dog2,
    features: ["Энергичная", "Обучаемая"],
  },
];

export const FemaleDogFields = () => {
  return (
    <div className="female-dogs-container">
      <div className="female-dogs-grid">
        {femaleDogsData.map((dog) => (
          <div className="female-dog-item" key={dog.id}>
            <img
              src={dog.image}
              alt={`Собака ${dog.name}`}
              className="female-dog-image"
            />
            <div className="female-dog-info">
              <p className="female-dog-name-age">{`${dog.name}, ${dog.age}`}</p>
              <div className="female-dog-features">
                {dog.features.map((feature, index) => (
                  <span className="female-dog-feature" key={index}>
                    {feature}
                  </span>
                ))}
              </div>
              <NavLink to={`/dog/${dog.id}`} className="female-read-more">
                Подробнее →
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
