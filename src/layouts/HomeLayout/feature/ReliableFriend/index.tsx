import imageSrc from "../../../../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import "./styles/Relible.css";
export const ReliableFriend = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src={imageSrc} alt="Надёжный Друг" className="home-image" />
        <h2>Надёжный Друг</h2>
        <p>
          Восточно-европейская овчарка - верный друг, надежный <br /> защитник и
          преданный компаньон.
        </p>
        <div className="home-buttons">
          <NavLink to="/puppies" className="home-button">
            Наши щенки
          </NavLink>
          <NavLink to="/contacts" className="home-button">
            Связаться с нами
          </NavLink>
        </div>
      </div>
    </div>
  );
};
