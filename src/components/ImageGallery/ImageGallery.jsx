import s from "../ImageGallery/ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items, onPhotoClick }) => {
  console.log("photos:", items);
  return (
    <ul className={s.gallery}>
      {items.map((item) => (
        <li key={item.id} className={s.item}>
          <ImageCard item={item} onPhotoClick={onPhotoClick} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;