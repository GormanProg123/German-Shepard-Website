import { Fragment } from "react";
import { ReliableFriend } from "./feature/ReliableFriend";
import { BreedDescription } from "./feature/BreedDescription";
import { NewsDescription } from "./feature/NewsDescription";
import { OurDogs } from "./feature/OurDogs";
import { AchievemntsDescription } from "./feature/AchievementsDescription";
import { QuestionField } from "./feature/QuestionField";

export const HomeLayout = () => {
  return (
    <Fragment>
      <ReliableFriend />
      <BreedDescription />
      <NewsDescription />
      <OurDogs />
      <AchievemntsDescription />
      <QuestionField />
    </Fragment>
  );
};
