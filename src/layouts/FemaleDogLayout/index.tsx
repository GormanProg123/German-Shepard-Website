import { Fragment } from "react";
import { TextField } from "../../components/TextField";
import { FemaleDogFields } from "./feature/FemaleDogFields";

export const FemaleDogLayout = () => {
  return (
    <Fragment>
      <TextField
        title="Суки"
        subtitle="Наши племенные суки восточно-европейской овчарки"
      />
      <FemaleDogFields />
    </Fragment>
  );
};
