import { Fragment } from "react";
import { TextField } from "../../components/TextField";
import { GalleryField } from "./feature/GalleryField";

export const GalleryLayout = () => {
  return (
    <Fragment>
      <TextField
        title="Галерея"
        subtitle="Фотографии наших собак, щенков и выставок"
      />
      <GalleryField />
    </Fragment>
  );
};
