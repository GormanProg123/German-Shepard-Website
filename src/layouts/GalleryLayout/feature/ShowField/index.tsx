import "./styles/Show.css";
import { ImageGrid } from "../../../../components/ImageGrid/ImageGrid";
import dog from "../../../../assets/images/dog3.jpg";

export const ShowField = () => {
  return (
    <div className="show-container">
      <ImageGrid imageSrc={dog} count={6} />
    </div>
  );
};
