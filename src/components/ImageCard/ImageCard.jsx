import s from "../ImageCard/ImageCard.module.css"

const ImageCard = ({ item }) => {
    return (
    <div>
      <img src={item.urls.small} alt={item.alt_description} />
        </div>
    );
}
    
export default ImageCard;