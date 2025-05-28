import s from "./ImageModal.module.css"
import Modal from "react-modal";


Modal.setAppElement("#root");

const ImageModal = ({ photo, isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                },
            }}
        >
            <div className={s.wrapper}>
                <h2 className={s.title}>{photo.description}</h2>
                <img className={s.image} src={photo.urls.regular} alt={photo.alt_description} />
            </div>
        </Modal>
    ); 
}
export default ImageModal;