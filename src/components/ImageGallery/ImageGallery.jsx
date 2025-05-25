import s from "../ImageGallery/ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items }) => {
  console.log("photos:", items);
  return (
    <ul className={s.gallery}>
      {items.map((item) => (
        <li key={item.id} className={s.item}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;