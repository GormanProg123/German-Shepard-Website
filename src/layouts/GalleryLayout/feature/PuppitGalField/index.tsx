import "./styles/PGallery.css";
import { ImageGrid } from "../../../../components/ImageGrid/ImageGrid";
import dog from "../../../../assets/images/dog3.jpg";

export const PuppitGalField = () => {
  return (
    <div className="puppitdog-container">
      <ImageGrid imageSrc={dog} count={8} />
    </div>
  );
};
