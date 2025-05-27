import s from "../ImageCard/ImageCard.module.css"

const ImageCard = ({ item, onPhotoClick}) => {
    return (
    <div className={s.wrapper}>
        <img onClick={() => onPhotoClick(item)} className={s.image} src={item.urls.small} alt={item.alt_description} />
        </div>
    );
}
    
export default ImageCard;