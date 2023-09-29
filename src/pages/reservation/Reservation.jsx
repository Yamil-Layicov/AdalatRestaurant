import { useState } from "react";
import "./reservation.scss";
import img from "./menuImg.png";
import { useMultistepForm } from "../../hooks/useMultiStepForm";
import { ResNames } from "./reservationSteps/resNames/ResNames";
import { TimePeople } from "../../hooks/TimePeople";
import { CalendarForm } from "./reservationSteps/calendarForm/CalendarForm";
import FinishInputs from "../../hooks/FinishInputs";


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
  // const [formData, setFormData] = useState({
  //   name: "",
  //   surname: "",
  //   email: "",
  //   phone: "",
  //   date: "",
  //   time: "",
  //   person_count: "",
  //   note: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, surname, email, phone, date, time, person_count } = formData;

  //   if (
  //     !name ||
  //     !surname ||
  //     !email ||
  //     !phone ||
  //     !date ||
  //     !time ||
  //     !person_count
  //   ) {
  //     toast.error("Bütün sahələri doldurun");
  //     return;
  //   }

  //   fetch("https://api.hill.az/api/reservation", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       toast.success("rezervasiya olundu");
  //       setTimeout(() => {
  //         window.location.reload();
  //       }, 500);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

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
      <TimePeople key={data} {...data} updateFields={updateFields} />,
      <FinishInputs key={data} {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("asd");
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
          <div className="stepsNums">{currentStepIndex + 1}/{steps.length}</div>
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
