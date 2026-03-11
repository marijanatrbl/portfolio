// import { Link } from "react-router-dom";

// import map from "../assets/4.jpg";
// import Button from "../components/Button";

import { useEffect, useState } from "react";
import api from "../api";
import GalleryImage from "../components/GalleryImage";
import type { GalleryImageType } from "../GalleryImage";
import "./Gallery.css";

function Gallery() {
  const [gallery, setGallery] = useState<GalleryImageType[]>([]);

  useEffect(() => {
    api.get("gallery/").then((res) => setGallery(res.data));
  }, []);

  return (
    <div className="carousel">
      <div className="group">
        {gallery.map((galleryimage) => (
          <div className="card">
            <GalleryImage key={galleryimage.id} galleryimage={galleryimage} />
          </div>
        ))}
      </div>

      <div aria-hidden className="group">
        {gallery.map((galleryimage) => (
          <GalleryImage key={galleryimage.id} galleryimage={galleryimage} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
