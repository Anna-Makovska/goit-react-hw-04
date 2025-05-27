import { useState } from 'react';
import './App.css'
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect } from 'react';
import { fetchImages } from './pictures-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Loadmore from './components/Loadmore/Loadmore';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Modal from "react-modal";
import ImageModal from './components/ImageModal/ImageModal';


Modal.setAppElement("#root");

function App() {




  const [topic, setTopic] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);


  const handleModalOpen = () => {
    setModalIsOpen(true);
}

  const handleModalClose = () => {
    setModalIsOpen(false);
    setSelectedPhoto(null);
  }

  const handleSelectedPhoto = (photo) => {
      setSelectedPhoto(photo);
      handleModalOpen();
  }

 
  const handleSearch = (newTopic) => {
    setTopic(newTopic);
    setPhotos([]);
    setCurrentPage(1);
  }


  const incrementPage = () => 
  {
      setCurrentPage(currentPage + 1);
    
  }

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function fetchData() {
      try {
        setisLoading(true);
        const data = await fetchImages(topic, currentPage);
        setPhotos((prevPhotos) => [...prevPhotos, ...data.photos]);
        setTotalPages(data.totalPages);

      } catch {
        setisError(true);
      } finally {
        setisLoading(false);
      }
    }

    fetchData();
  }, [currentPage, topic]);
  const hasPhotos = photos.length > 0;
  const isLastPage = currentPage === totalPages;

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
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
        {selectedPhoto && <ImageModal photo={selectedPhoto} />}
      </Modal>

      <header className="header">
        <SearchBar onSearch={handleSearch} />
      </header>
      <main className="main">
        {isError && <ErrorMessage />}
        {hasPhotos && (
          <ImageGallery items={photos} onPhotoClick={handleSelectedPhoto} />
        )}
        {hasPhotos && !isLastPage && <Loadmore onClick={incrementPage} />}
        {isLoading && <Loader />}
      </main>
    </>
  );
}

export default App;
