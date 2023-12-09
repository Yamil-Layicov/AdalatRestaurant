import { useState, lazy, Suspense } from "react";
import "./gallery.scss";
import img from "./imgs/menuImg.png";
const Modal = lazy(() => import("./modal/Modal"));
import img2 from './imgs/galery-1.jpg';
import img3 from './imgs/galery-2.jpg';
import img4 from './imgs/galery-3.jpg';
import img5 from './imgs/galery-4.jpg';
import img7 from './imgs/galery-5.jpg';
import img8 from './imgs/galery-6.jpg';
import img9 from './imgs/galery-7.jpg';
import img10 from './imgs/galery-8.jpg';
import img11 from './imgs/galery-9.jpg';
import img12 from './imgs/galery-10.jpg';
import img13 from './imgs/galery-11.jpg';
import img14 from './imgs/galery-12.jpg';

const Gallery = () => {

  const images = [
    {
      id: 1,
      title:
        img2,
    },
    {
      id: 2,
      title:
      img3,
    },
    {
      id: 3,
      title:
      img4,
    },
    {
      id: 4,
      title:
      img5,
    },
    {
      id: 5,
      title:
      img7,
    },
    {
      id: 6,
      title:
      img8,
    },
    {
      id: 7,
      title:
      img9,
    },
    {
      id: 8,
      title:
      img10,
    },
    {
      id: 9,
      title:
      img11,
    },
    {
      id: 10,
      title:
      img12,
    },
    {
      id: 11,
      title:
      img13,
    },
    {
      id: 12,
      title:
      img14,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="mainGallery">
      <div className="menuPage">
        <div className="menu">
          <div className="img">
            <img src={img} />
          </div>
          <h1>Qalereya</h1>
          <p>Fərah məkanımızdan zövq alacaqsınız.</p>
        </div>
      </div>
      <div className="galleryTitle">
        <h1 className="mainMenuTitle">Gözoxşayan məkanımızdan rəsimlər
</h1>
      </div>
      <div className="imgBoxContent">
        <div className="imgBox">
          {images.map((img, index) => (
            <div className="img" key={img.id} onClick={() => openModal(index)}>
              <img src={img.title} alt={`Image ${img.id}`} />
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <Modal
            showModal={showModal}
            closeModal={closeModal}
            images={images}
            currentIndex={currentIndex}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Gallery;
