import { useState } from "react";
import "./styles/Image.css";

interface ImageGridProps {
  imageSrc: string;
  count: number;
}

export function ImageGrid({ imageSrc, count }: ImageGridProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = Array(count).fill(imageSrc);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <div className="image-item" key={index} onClick={() => openModal(src)}>
          <img src={src} alt={`image-${index}`} />
        </div>
      ))}

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage!} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
}
