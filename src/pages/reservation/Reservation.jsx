import { useState } from "react";
import "./reservation.scss";
import { toast } from "react-toastify";
import img from "./menuImg.png";


const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    person_count: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, email, phone, date, time, person_count } = formData;

    if (
      !name ||
      !surname ||
      !email ||
      !phone ||
      !date ||
      !time ||
      !person_count
    ) {
      toast.error("Bütün sahələri doldurun");
      return;
    }

    fetch("https://api.hill.az/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("rezervasiya olundu");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <h1>Rezervasiya</h1>
        <form className="reserveForm" onSubmit={handleSubmit}>
          <div className="firstName">
            <label>Ad</label>
            <input type="text" name="name" onChange={handleChange} />
          </div>
          <div className="lastName">
            <label>Soyad</label>
            <input type="text" name="surname" onChange={handleChange} />
          </div>
          <div className="email">
            <label>E-poçt</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div className="phone">
            <label>Tel: nömrəsi</label>
            <input type="tel" name="phone" onChange={handleChange} />
          </div>
          <div className="date">
            <label>Tarix</label>
            <input type="date" name="date" onChange={handleChange} />
          </div>
          <div className="time">
            <label>Saat</label>
            <input type="time" name="time" onChange={handleChange} />
          </div>
          <div className="numPeople">
            <label>İnsan sayı</label>
            <input type="number" name="person_count" onChange={handleChange} />
          </div>
          <div className="note">
            <label>Qeyd</label>
            <textarea
              name="note"
              cols="50"
              rows="1"
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="aboutEdit" type="submit">
            Göndər
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
