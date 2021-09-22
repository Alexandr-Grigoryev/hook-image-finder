import s from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ id, URL, largeImg, selectImg }) {
  return (
    <div>
      <li onClick={() => selectImg(largeImg)} className={s.ImageGalleryItem}>
        <img id={id} src={URL} alt="" className={s.ImageGalleryItemImage} />
      </li>
    </div>
  );
}
