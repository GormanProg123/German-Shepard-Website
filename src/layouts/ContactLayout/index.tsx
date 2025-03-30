import { Fragment } from "react";
import { TextField } from "../../components/TextField";
import { InfFields } from "./feature/InfFields";
import { MapsField } from "./feature/MapsField";

export const ContactLayout = () => {
  return (
    <Fragment>
      <TextField
        title="Контакты"
        subtitle="Свяжитесь с нами для получения дополнительной информации"
      />
      <InfFields />
      <MapsField />
    </Fragment>
  );
};
