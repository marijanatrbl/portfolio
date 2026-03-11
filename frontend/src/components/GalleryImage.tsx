import "./GalleryImage.css";
import type { GalleryImageType } from "../GalleryImage";

type GalleryImageProps = {
  galleryimage: GalleryImageType;
};

function GalleryImage({ galleryimage }: GalleryImageProps) {
  return (
    <>
      <div className="container">
        <div className="imageContainer">
          {galleryimage.image && (
            <img
              src={`http://127.0.0.1:8000${galleryimage.image}`}
              alt={galleryimage.title}
            />
          )}
        </div>
        <h3 className="imageTitle">{galleryimage.title}</h3>
        <p className="imageDescription">{galleryimage.description}</p>
      </div>
    </>
  );
}

export default GalleryImage;
