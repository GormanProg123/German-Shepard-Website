import { useState } from "react";
import { CareButtons } from "../CareButtons";
import { CaringInfo } from "../CaringInfo";
import { TrainingFields } from "../TrainingFields";
import { HealthFields } from "../HealthFields";
import { FoodFields } from "../FoolField";

export const CareFields = () => {
  const [selected, setSelected] = useState("Уход");

  return (
    <div>
      <CareButtons onSelect={setSelected} />
      <div>
        {selected === "Уход" && <CaringInfo />}
        {selected === "Дрессировка" && <TrainingFields />}
        {selected === "Здоровье" && <HealthFields />}
        {selected === "Питание" && <FoodFields />}
      </div>
    </div>
  );
};
