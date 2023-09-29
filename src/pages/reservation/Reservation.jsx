import { useState } from "react";
import "./reservation.scss";
import img from "./menuImg.png";
import { useMultistepForm } from "../../hooks/useMultiStepForm";
import { ResNames } from "./reservationSteps/resNames/ResNames";
import { TimeAndPeople } from "./reservationSteps/timeAndPeople/TimeAndPeople";
import { CalendarForm } from "./reservationSteps/calendarForm/CalendarForm";
import PersonalInfo from "./reservationSteps/personalInfo/PersonalInfo";

const INITIAL_DATA = {
  resName: "",
  currentDate: [],
  timeHour: "",
  timeMin: "",
  guests: "",
  fullName: "",
  email: "",
  phone: "",
  note: "",
};

const Reservation = () => {
  const [activeResName, setActiveResName] = useState(null);
  const [activeDayData, setActiveDayData] = useState(null);

  const [data, setData] = useState(INITIAL_DATA);

  console.log(data);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <ResNames
        key={data}
        {...data}
        updateFields={updateFields}
        activeResName={activeResName}
        setActiveResName={setActiveResName}
      />,
      <CalendarForm
        key={data}
        {...data}
        updateFields={updateFields}
        activeDayData={activeDayData}
        setActiveDayData={setActiveDayData}
      />,
      <TimeAndPeople key={data} {...data} updateFields={updateFields} />,
      <PersonalInfo key={data} {...data} updateFields={updateFields} />,
    ]);
  const {
    resName,
    timeHour,
    timeMin,
    guests,
    email,
    phone,
    note,
    currentDate,
  } = data;

  function onSubmit(e) {

    e.preventDefault();
    if (!isLastStep) return next();

    fetch("https://api.hill.az/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="menuAndReservation">
      <div className="menuPage">
        <div className="menu">
          <div className="img">
            <img src={img} />
          </div>
          <h1>Stol rezerv edin</h1>
          <p>2005-ci ildən ləzzətli və dadlı yeməklər bişiririk</p>
        </div>
      </div>

      <div className="reservationPage">
        <form onSubmit={onSubmit}>
          <div className="stepsNums">
            {currentStepIndex + 1}/{steps.length}
          </div>
          {step}
          <hr />
          <div className="buttons">
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Geri
              </button>
            )}
            {<button type="submit">{isLastStep ? "Göndər" : "İrəli"}</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
