import "./styles/M.css";

export const MapsField = () => {
  return (
    <div className="container maps-field-container reveal">
      <div className="maps-field-inner-container">
        <div className="maps-field-content">
          <div className="maps-field-title">Как нас найти</div>
        </div>
        <div className="maps-field-map">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=28.7582%2C55.4872%2C28.7602%2C55.4892&marker=55.4882%2C28.7592"
            width="1000"
            height="600"
            style={{ border: "1px solid black" }}
            title="Полоцк, Ефросиньи Полоцкой 17а-2"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
