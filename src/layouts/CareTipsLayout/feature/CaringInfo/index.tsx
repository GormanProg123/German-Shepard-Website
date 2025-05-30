import "./styles/CInfo.css";

export const CaringInfo = () => {
  return (
    <div className="caring-info">
      <div className="caring-header">
        <h2>Уход за восточно-европейской овчаркой</h2>
        <p>
          Восточно-европейская овчарка имеет густую двойную шерсть, которая
          <br />
          требует регулярного ухода. Особенно важно уделять внимание шерсти в
          <br />
          период сезонной линьки.
        </p>
      </div>

      <div className="caring-content">
        <div className="caring-text">
          <h3>Рекомендации по уходу:</h3>
          <ul>
            <li>
              Расчесывайте собаку 2-3 раза в неделю, а в период линьки –
              ежедневно
            </li>
            <li>
              Используйте специальную щетку-пуходерку для удаления отмершей
              шерсти
            </li>
            <li>
              Купайте собаку по мере необходимости, но не чаще 1 раза в 2-3
              месяца
            </li>
            <li>Регулярно проверяйте и чистите уши, глаза и зубы</li>
            <li>Подстригайте когти по мере отрастания</li>
          </ul>
        </div>
        <div className="caring-image">
          <div className="image-placeholder"></div>
        </div>
      </div>

      <div className="caring-cards">
        <div className="card">
          <h4>Уход за шерстью</h4>
          <p>Рекомендации по расчесыванию и купанию</p>
          <span>
            Подробная информация о том, как правильно ухаживать за вашей
            собакой, чтобы она была здоровой и счастливой.
          </span>
        </div>
        <div className="card">
          <h4>Уход за когтями</h4>
          <p>Как правильно подстригать когти</p>
          <span>
            Подробная информация о том, как правильно ухаживать за вашей
            собакой, чтобы она была здоровой и счастливой.
          </span>
        </div>
        <div className="card">
          <h4>Уход за ушами и глазами</h4>
          <p>Профилактика заболеваний ушей и глаз</p>
          <span>
            Подробная информация о том, как правильно ухаживать за вашей
            собакой, чтобы она была здоровой и счастливой.
          </span>
        </div>
      </div>
    </div>
  );
};
