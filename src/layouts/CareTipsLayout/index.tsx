import { Fragment } from "react";
import { TextField } from "../../components/TextField";
import { CareFields } from "./feature/CareFields";

export const CareTipsLayout = () => {
  return (
    <Fragment>
      <TextField
        title="Советы владельцев"
        subtitle="Полезная информация о содержании и воспитании восточно-европейской овчарки"
      />
      <CareFields />
    </Fragment>
  );
};
