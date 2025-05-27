import s from "./ImageModal.module.css"
const ImageModal = ({photo}) => {
    
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>{photo.description}</h2>
            <img className={s.image} src={photo.urls.regular} alt={photo.alt_description} />
                </div>

    )
}
export default ImageModal;