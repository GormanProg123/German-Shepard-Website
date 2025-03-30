import { Fragment } from "react";
import { TextField } from "../../components/TextField";
import { MaleDogField } from "./feature/MaleDogFields";

export const MaleDogLayout = () => {
  return (
    <Fragment>
      <TextField
        title="Кобели"
        subtitle="Наши племенные кобели восточно-европейской овчарки"
      />
      <MaleDogField />
    </Fragment>
  );
};
