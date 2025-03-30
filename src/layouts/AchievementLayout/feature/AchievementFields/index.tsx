import "./styles/achfield.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import dog2 from "../../../../assets/images/dog2.jpg";

export const AchievementFields = () => {
  const achievements = [
    {
      id: 1,
      image: dog2,
      title: "Чемпион",
      name: "Барон",
      subtitle: "Лучший среди овчарок",
      date: "12.08.2023",
      location: "Минск, Беларусь",
      description:
        "Барон завоевал звание чемпиона среди немецких овчарок, показав выдающиеся результаты в послушании и ловкости.",
    },
    {
      id: 2,
      image: dog2,
      title: "Победитель",
      name: "Луна",
      subtitle: "Призёр международного конкурса",
      date: "05.07.2022",
      location: "Бобруйск, Беларусь",
      description:
        "Луна получила награду за элегантность и грацию, став победителем престижного международного конкурса.",
    },
    {
      id: 3,
      image: dog2,
      title: "Гранд-чемпион",
      name: "Рекс",
      subtitle: "Выдающиеся достижения в спорте",
      date: "20.09.2021",
      location: "Москва, Россия",
      description:
        "Рекс продемонстрировал невероятную скорость и ловкость, завоевав титул гранд-чемпиона в спортивных состязаниях.",
    },
    {
      id: 4,
      image: dog2,
      title: "Лучший щенок",
      name: "Белла",
      subtitle: "Перспективная молодая звезда",
      date: "15.06.2023",
      location: "Гродно, Беларусь",
      description:
        "Белла получила титул лучшего щенка на национальной выставке, очаровав судей своей энергией и умом.",
    },
  ];

  return (
    <div className="achievement-container">
      {achievements.map((achievement) => (
        <div key={achievement.id} className="achievement-card">
          <div className="achievement-image">
            <img src={achievement.image} alt={achievement.name} />
          </div>
          <div className="achievement-content">
            <span className="achievement-tag">{achievement.title}</span>
            <h2 className="achievement-name">{achievement.name}</h2>
            <p className="achievement-subtitle">{achievement.subtitle}</p>
            <div className="achievement-details">
              <div className="achievement-detail">
                <FaCalendarAlt className="icon" />
                <span>{achievement.date}</span>
              </div>
              <div className="achievement-detail">
                <FaMapMarkerAlt className="icon" />
                <span>{achievement.location}</span>
              </div>
            </div>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
