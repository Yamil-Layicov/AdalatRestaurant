import { useState, lazy, Suspense } from "react";
import "./gallery.scss";
const Modal = lazy(() => import("./modal/Modal"));
import { useQuery } from "@tanstack/react-query";
import api from '../../admin/api/posts';
import img from './imgs/menuImg.png';

const Gallery = () => {



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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.data?.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + data?.data?.length) % data?.data?.length
    );
  };

  const { data } = useQuery({
    queryKey: ["gallery"],
    queryFn: () => api.get("gallery"),
  });

  const { data:dataBanner } = useQuery({
    queryKey: ["banners/gallery"],
    queryFn: () => api.get("banners/gallery"),
  });


  return (
    <div className="mainGallery">
      <div className="menuPage" style={{
          backgroundImage: `url(${dataBanner?.data?.image})`,
          width: "100%",
          height: "70vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
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
          {data?.data?.map((img, index) => (
            <div className="img" key={img.id} onClick={() => openModal(index)}>
              <img src={img.image} alt={`Image ${img.id}`} />
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <Modal
            showModal={showModal}
            closeModal={closeModal}
            images={data?.data}
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
