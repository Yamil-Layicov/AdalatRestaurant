import React, { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import "./timePeople.scss";

export function TimePeople() {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  const handleHoursChange = (event) => {
    const newHours = event.target.value;
    if (newHours <= 23) {
      setHours(newHours);
    }
  };

  const handleMinutesChange = (event) => {
    const newMinutes = event.target.value;
    if (newMinutes <= 59) {
      setMinutes(newMinutes);
    }
  };

  return (
    <FormWrapper title="Vaxtı və qonaqları seçin">
      <div className="time-section">
        <label htmlFor="hours">Hours:</label>
        <input
          type="number"
          id="hours"
          value={hours}
          onChange={handleHoursChange}
        />
        <label htmlFor="minutes">Minutes:</label>
        <input
          type="number"
          id="minutes"
          value={minutes}
          onChange={handleMinutesChange}
        />
        <div className="time-display">
          {`${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`}
        </div>
      </div>
      <div>
        <label htmlFor="">Neçə insan</label>
          <input type="number" />
        </div>
    </FormWrapper>
  );
}












// import { FormWrapper } from "./FormWrapper";

// export function TimePeople({email, password, updateFields}){
//     return(
//         <FormWrapper title="Account">
//           <label>Email</label>
//           <input type="email" autoFocus required value={email} onChange={e => updateFields({email: e.target.value})}/>
//           <label>Password</label>
//           <input type="password" required value={password} onChange={e => updateFields({password: e.target.value})}/>
//         </FormWrapper>
//     )
// }