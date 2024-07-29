import "./slider.scss";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { SyncLoader } from "react-spinners";
import api from '../../admin/api/posts';

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
    navigate("/gallery");
  };

  const { isLoading, data } = useQuery({
    queryKey: ["sliders"],
    queryFn: () => api.get("sliders"),
  });

  return (
    <div className="slider">
      {isLoading ? (
        <div className="spinner">
          <SyncLoader size={15} color={"red"} loading={isLoading} />
        </div>
      ) : (
        <>
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
                  src={data?.data[0].image}
                  alt=""
                />
                <div className="sliderText">
                  <motion.h1
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.1 }}
                  >
                    {data?.data[0].text}
                  </motion.h1>
                  <motion.button
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.4, delay: 0.6 }}
                    onClick={moveToReservPage}
                  >
                    Qalereya
                  </motion.button>
                </div>
              </div>
            )}
            {currentPage === 2 && (
              <div className="secondBox">
                <img
                  src={data?.data[1].image}
                  alt=""
                />
                <div className="sliderText">
                  <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.1 }}
                  >
                    {data?.data[1].text}
                  </motion.h1>
                  <motion.button
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.4, delay: 0.6 }}
                    onClick={moveToReservPage}
                  >
                    Qalereya
                  </motion.button>
                </div>
              </div>
            )}
            {currentPage === 3 && (
              <div className="thirdBox">
                <img
                  src={data?.data[2].image}
                  alt=""
                />
                <div className="sliderText">
                  <motion.h1
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.1 }}
                  >
                    {data?.data[2].text}
                  </motion.h1>
                  <motion.button
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.4, delay: 0.6 }}
                    onClick={moveToReservPage}
                  >
                    Qalereya
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
        </>
      )}
    </div>
  );
};

export default Slider;
