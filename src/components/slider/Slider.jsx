import "./slider.scss";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage === 3 ? 1 : currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage === 1 ? 3 : currentPage - 1);
  };

  const navigate = useNavigate()

  const moveToReservPage = () => {
    navigate('/reservation')
  }

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
          <div>
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
            <div className="sliderText">
              <h1>
                Taste <br /> Uique Food
              </h1>
              <h4>Cooking delicuos food since 2005</h4>
              <button onClick={moveToReservPage}>Rezerv edin</button>
            </div>
          </div>
        )}
        {currentPage === 2 && (
          <div>
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt=""
            />
            <div className="sliderText">
              <h1>
                Taste <br /> Uique Food
              </h1>
              <h4>Cooking delicuos food since 2005</h4>
              <button onClick={moveToReservPage}>Rezerv edin</button>
            </div>
          </div>
        )}
        {currentPage === 3 && (
          <div>
            <img
              src="https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1840&q=80"
              alt=""
            />
            <div className="sliderText">
              <h1>
                Taste <br /> Uique Food
              </h1>
              <h4>Cooking delicuos food since 2005</h4>
              <button onClick={moveToReservPage}>Rezerv edin</button>
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
