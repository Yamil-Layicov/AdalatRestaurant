import "./slider.scss";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from './imgs/a1.jpg'
import img2 from './imgs/a2.jpg'
import img4 from './imgs/a4.jpg'

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage === 3 ? 1 : currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage === 1 ? 3 : currentPage - 1);
  };

  const navigate = useNavigate();

  const moveToReservPage = () => {
    navigate("/reservation");
  };

  return (
    <div className="slider">
      <div className="sliderDots">
        <span
          className={`slider-dot ${currentPage === 1 ? "active" : ""}`}
          onClick={() => setCurrentPage(1)}
        ></span>
        <span
          className={`slider-dot ${currentPage === 2 ? "active" : ""}`}
          onClick={() => setCurrentPage(2)}
        ></span>
        <span
          className={`slider-dot ${currentPage === 3 ? "active" : ""}`}
          onClick={() => setCurrentPage(3)}
        ></span>
      </div>
      <div className="sliderContent">
        {currentPage === 1 && (
          <div className="firstBox">
            <img
              src={img1}
              alt=""
            />
            <div className="sliderText">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                Dadlı və <br /> gözoxşayan  təamlar
              </motion.h1>
              <motion.h4
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3, delay: 0.3 }}
              >
                Bizim menyumuz -  Ləzzətli təamlarımız.
              </motion.h4>
              <motion.button
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4, delay: 0.6 }}
                onClick={moveToReservPage}
              >
                Rezerv edin
              </motion.button>
            </div>
          </div>
        )}
        {currentPage === 2 && (
          <div className="secondBox">
            <img
              src={img2}
              alt=""
            />
            <div className="sliderText">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                Canlı musiqi - Axşamlar xoş <br /> ab-hava sizi gözləyir
              </motion.h1>
              <motion.h4
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3, delay: 0.3 }}
              >
                Milli dizaynla bəzədilmiş xoş atmosferli <br /> kabinetlərimiz
              </motion.h4>
              <motion.button
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4, delay: 0.6 }}
                onClick={moveToReservPage}
              >
                Rezerv edin
              </motion.button>
            </div>
          </div>
        )}
        {currentPage === 3 && (
          <div className="thirdBox">
            <img
              src={img4}
              alt=""
            />
            <div className="sliderText">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                Ləzzətli pivə və <br /> bol məzələr
              </motion.h1>
              <motion.h4
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3, delay: 0.3 }}
              >
                Gözoxşayan interyer - Milli dizaynda zövq alacaqsınız.
              </motion.h4>
              <motion.button
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4, delay: 0.6 }}
                onClick={moveToReservPage}
              >
                Rezerv edin
              </motion.button>
            </div>
          </div>
        )}
      </div>
      <div className="rightBtn" onClick={handleNext}>
        <FaChevronRight />
      </div>
      <div className="leftBtn" onClick={handlePrevious}>
        <FaChevronLeft />
      </div>
    </div>
  );
};

export default Slider;
