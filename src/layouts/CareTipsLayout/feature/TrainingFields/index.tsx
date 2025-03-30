import "./styles/Training.css";

export const TrainingFields = () => {
  return (
    <div className="training-info">
      <div className="training-header">
        <h2>Дрессировка восточно-европейской овчарки</h2>
        <p>
          Восточно-европейская овчарка - умная и обучаемая порода, которая
          <br />
          нуждается в ранней социализации и последовательной дрессировке.
          <br />
          Эти собаки отлично подходят для различных видов служебной работы.
        </p>
      </div>

      <div className="training-content">
        <div className="training-text">
          <h3>Основные принципы дрессировки:</h3>
          <ul>
            <li>
              Начинайте социализацию и базовое обучение с раннего возраста
            </li>
            <li>Будьте последовательны и терпеливы</li>
            <li>Используйте положительное подкрепление</li>
            <li>
              Регулярно занимайтесь с собакой, короткие тренировки эффективнее
              длинных
            </li>
            <li>Обеспечьте достаточную физическую и умственную нагрузку</li>
          </ul>
        </div>
        <div className="training-image">
          <div className="training-image-placeholder"></div>
        </div>
      </div>
    </div>
  );
};
