import "./styles/GButton.css";
import { useState } from "react";

const buttons = ["Взрослые собаки", "Щенки", "Выставки"];

export const GalleryButtons = ({
  onSelect,
}: {
  onSelect: (label: string) => void;
}) => {
  const [active, setActive] = useState("Взрослые собаки");

  return (
    <div className="gallery-container">
      <div className="gallery-buttons">
        {buttons.map((label) => (
          <button
            key={label}
            className={active === label ? "active" : ""}
            onClick={() => {
              setActive(label);
              onSelect(label);
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
