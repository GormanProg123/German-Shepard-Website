import "./styles/Adult.css";
import { ImageGrid } from "../../../../components/ImageGrid/ImageGrid";
import dog from "../../../../assets/images/dog3.jpg";

export const AdultDogField = () => {
  return (
    <div className="adult-container">
      <ImageGrid imageSrc={dog} count={12} />
    </div>
  );
};
