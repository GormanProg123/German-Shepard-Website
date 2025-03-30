import "./styles/Dogs.css";
import { NavLink } from "react-router-dom";
import { maleDogsData } from "../../../MaleDogLayout/feature/MaleDogFields";
import { femaleDogsData } from "../../../FemaleDogLayout/feature/FemaleDogFields";
import { Dog } from "../../../../utils/interfaces/Dog";
const getRandomDogs = (dogsArray: Dog[], count: number): Dog[] => {
  const shuffled = [...dogsArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const OurDogs = () => {
  const allDogs = [...maleDogsData, ...femaleDogsData];
  const dogsData = getRandomDogs(allDogs, 3);

  return (
    <div className="our-dogs-container">
      <p className="latest-dogs">Лучшие представители</p>
      <h2 className="our-dogs-title">Наши собачки</h2>
      <p className="our-dogs-subtitle">
        Познакомьтесь с нашими лучшими представителями породы
      </p>

      <div className="dogs-grid">
        {dogsData.map((dog: Dog) => (
          <div className="dog-item" key={dog.id}>
            <img
              src={dog.image}
              alt={`Собака ${dog.name}`}
              className="dog-image"
            />
            <div className="dog-info">
              <p className="dog-name-age">{`${dog.name}, ${dog.age}`}</p>
              <div className="dog-features">
                {dog.features.map((feature: string, index: number) => (
                  <span className="dog-feature" key={index}>
                    {feature}
                  </span>
                ))}
              </div>
              <NavLink to={`/dog/${dog.id}`} className="read-more">
                Подробнее →
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      <div className="dogs-buttons">
        <NavLink to="/males" className="dogs-button">
          Кобели
        </NavLink>
        <NavLink to="/females" className="dogs-button">
          Суки
        </NavLink>
      </div>
    </div>
  );
};
