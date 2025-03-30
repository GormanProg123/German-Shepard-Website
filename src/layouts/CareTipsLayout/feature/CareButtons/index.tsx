import "./styles/Care.css";
import { useState } from "react";

const buttons = ["Уход", "Дрессировка", "Здоровье", "Питание"];

export const CareButtons = ({
  onSelect,
}: {
  onSelect: (label: string) => void;
}) => {
  const [active, setActive] = useState("Уход");

  return (
    <div className="care-container">
      <div className="care-buttons">
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
