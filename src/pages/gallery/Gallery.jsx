import { useState, lazy, Suspense } from "react";
import "./gallery.scss";
import img from "./menuImg.png";
const Modal = lazy(() => import("./modal/Modal"));

const Gallery = () => {
  const images = [
    {
      id: 1,
      title:
        "https://images.unsplash.com/photo-1601893211509-81b6d03e46a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      title:
        "https://images.unsplash.com/photo-1610538625499-635bf13427b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    },
    {
      id: 3,
      title:
        "https://images.unsplash.com/photo-1679432116921-89f5b227bffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      id: 4,
      title:
        "https://images.unsplash.com/photo-1651873491993-29f701fa520d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RvdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      title:
        "https://images.unsplash.com/photo-1657321185221-10dbdc729fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      id: 6,
      title:
        "https://images.unsplash.com/photo-1631049421483-bbcab9b66473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 7,
      title:
        "https://images.unsplash.com/photo-1679432116921-89f5b227bffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      id: 8,
      title:
        "https://images.unsplash.com/photo-1601893211509-81b6d03e46a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 9,
      title:
        "https://images.unsplash.com/photo-1679432116921-89f5b227bffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      id: 10,
      title:
        "https://images.unsplash.com/photo-1601893211509-81b6d03e46a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 11,
      title:
        "https://images.unsplash.com/photo-1657321185221-10dbdc729fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      id: 12,
      title:
        "https://images.unsplash.com/photo-1631049421483-bbcab9b66473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
          <p>2005-ci ildən ləzzətli və dadlı yeməklər bişiririk</p>
        </div>
      </div>
      <div className="galleryTitle">
        <h1 className="mainMenuTitle">Here some pictures</h1>
        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
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
