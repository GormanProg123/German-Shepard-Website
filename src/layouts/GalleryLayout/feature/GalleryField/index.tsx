import { useState } from "react";
import { GalleryButtons } from "../GalleryButtons";
import { AdultDogField } from "../AdultDogField";
import { PuppitGalField } from "../PuppitGalField";
import { ShowField } from "../ShowField";

export const GalleryField = () => {
  const [selected, setSelected] = useState("Взрослые собаки");
  return (
    <div>
      <GalleryButtons onSelect={setSelected} />
      <div className="content">
        {selected === "Взрослые собаки" && <AdultDogField />}
        {selected === "Щенки" && <PuppitGalField />}
        {selected === "Выставки" && <ShowField />}
      </div>
    </div>
  );
};
