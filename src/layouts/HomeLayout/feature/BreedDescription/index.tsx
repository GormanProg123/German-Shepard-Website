import dogSrc from "../../../../assets/vostochdog.jpg";
import "./styles/Breed.css";
export const BreedDescription = () => {
  return (
    <div className="breed-description-container">
      <div className="breed-description-content">
        <div className="breed-tag">О породе</div>
        <h2>Восточно-европейская овчарка</h2>
        <p>
          Восточно-европейская овчарка - это крупная, мощная и выносливая собака
          с уравновешенным характером. Порода была выведена в<br /> СССР на
          основе немецкой овчарки, но с учетом более суровых климатических
          условий.
        </p>
        <p>
          Эти собаки отличаются высоким интеллектом, преданностью хозяину и
          отличными рабочими качествами. Они прекрасно поддаются дрессировке и
          могут использоваться как служебные собаки, охранники и компаньоны.
        </p>
        <a
          href="https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B2%D1%87%D0%B0%D1%80%D0%BA%D0%B0"
          target="_blank"
          rel="noopener noreferrer"
          className="breed-description-button"
        >
          Узнать больше
        </a>
      </div>
      <div className="breed-description-image">
        <img src={dogSrc} alt="Восточно-европейская овчарка" />
      </div>
    </div>
  );
};
