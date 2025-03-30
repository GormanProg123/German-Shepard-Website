import { Fragment } from "react";
import { TextField } from "../../components/TextField";
import { ContentFields } from "./feature/СontentFields";
export const NewsLayout = () => {
  return (
    <Fragment>
      <TextField
        title="Новости"
        subtitle="Последние события и новости нашего клуба"
      />
      <ContentFields />
    </Fragment>
  );
};
