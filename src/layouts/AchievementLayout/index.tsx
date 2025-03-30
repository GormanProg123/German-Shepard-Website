import { Fragment } from "react";
import { TextField } from "../../components/TextField";
import { AchievementFields } from "./feature/AchievementFields";

export const AchievementLayout = () => {
  return (
    <Fragment>
      <TextField
        title="Достижения"
        subtitle="Награды и титулы наших собак на выставках и соревнованиях"
      />
      <AchievementFields />
    </Fragment>
  );
};
