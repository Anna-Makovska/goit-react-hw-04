import { useState } from 'react';
import './App.css'
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect } from 'react';
import { fetchImages } from './pictures-api';
import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {

  const [topic, setTopic] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [photos, setPhotos] = useState([]);


  const handleSearch = (newTopic) => {
    setTopic(newTopic);
    setPhotos([]);
    setCurrentPage(1);
  }

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function fetchData() {
      try {
        const data = await fetchImages(topic, currentPage);
        setPhotos((prevPhotos) => [...prevPhotos, ...data.photos]);
        setTotalPages(data.totalPages);

      } catch {
        console.log("error")
      } finally {
        console.log("success")
      }
    }

    fetchData();
  }, [currentPage, topic]);

  return (
    <>
      <header className="header">
        <SearchBar onSearch={handleSearch} />
      </header>
      <body>
        <ImageGallery items={photos} />
      </body>
    </>
  );
}

export default App;
