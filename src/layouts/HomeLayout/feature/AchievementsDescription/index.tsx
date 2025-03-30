import "./styles/Achievement.css";
import { achievementsData } from "../../../../components/AchievementsData/AchievementsData";

export const AchievemntsDescription = () => {
  return (
    <div className="achievements-container">
      <p className="achievements-label">Наши преимущества</p>
      <h2 className="achievements-title">Почему выбирают нас</h2>
      <p className="achievements-subtitle">
        Мы заботимся о здоровье и качестве наших собак, следуя высоким
        стандартам разведения
      </p>

      <div className="achievements-grid">
        {achievementsData.map((item, index) => (
          <div className="achievement-item" key={index}>
            <div className="achievement-icon">{item.icon}</div>
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
