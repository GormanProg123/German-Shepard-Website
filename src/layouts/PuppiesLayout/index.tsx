import { Fragment } from "react";
import { TextField } from "../../components/TextField";
import { PuppiesFields } from "./feature/PuppiesFields";
import { FuturePuppies } from "./feature/FuturePuppies";

export const PuppiesLayout = () => {
  return (
    <Fragment>
      <TextField
        title="Щенки"
        subtitle="Доступные для продажи щенки восточно-европейской овчарки"
      />
      <PuppiesFields />
      <FuturePuppies />
    </Fragment>
  );
};
