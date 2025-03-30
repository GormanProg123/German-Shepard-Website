import "./styles/Puppies.css";
import {
  puppiesData,
  Puppy,
} from "../../../../components/PuppiesData/PuppiesData";

export const PuppiesFields = () => {
  return (
    <div className="puppies-container">
      {puppiesData.map((puppy: Puppy) => (
        <div key={puppy.id} className="puppy-card">
          <div className="puppy-info">
            <span className="puppy-birth-date">
              Дата рождения: {puppy.birthDate}
            </span>
            <span className="puppy-available">Доступно: {puppy.available}</span>
          </div>
          <h2>{puppy.litter}</h2>
          <p className="puppy-parents">Родители: {puppy.parents}</p>
          <p className="puppy-description">{puppy.description}</p>
          <div className="puppy-photos">
            {puppy.images.map((image, index) => (
              <img key={index} src={image} alt={`Щенок ${index + 1}`} />
            ))}
          </div>
          <button className="puppy-button">Узнать поподробнее</button>
        </div>
      ))}
    </div>
  );
};
