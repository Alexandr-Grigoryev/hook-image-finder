import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ selectImg, imgArr }) => (
  <div>
    {imgArr && (
      <ul className={s.ImageGallery}>
        {imgArr.map((item) => (
          <ImageGalleryItem
            id={item.id}
            key={item.id}
            URL={item.webformatURL}
            largeImg={item.largeImageURL}
            selectImg={selectImg}
          />
        ))}
      </ul>
    )}
  </div>
);

export default ImageGallery;
