import { FormWrapper } from "../pages/reservation/reservationSteps/formWrapper/FormWrapper";

export function TimePeople({updateFields, timeHour, timeMin, guests}) {
 

  const handleHoursChange = (event) => {
    const newHours = event.target.value;
    if (newHours <= 23) {
      updateFields({timeHour:newHours})
    }
  };

  const handleMinutesChange = (event) => {
    const newMinutes = event.target.value;
    if (newMinutes <= 59) {
      updateFields({timeMin:newMinutes})
    }
  };

  const handlePeopleNum = (event) => {
    updateFields({guests:event.target.value})
  };

  return (
    <FormWrapper title="Vaxtı və qonaqları seçin">
      <div className="time-section">
        <label htmlFor="hours">Hours:</label>
        <input
          type="number"
          id="hours"
          value={timeHour}
          onChange={handleHoursChange}
        />
        <label htmlFor="minutes">Minutes:</label>
        <input
          type="number"
          id="minutes"
          value={timeMin}
          onChange={handleMinutesChange}
        />
        <div className="time-display">
         {timeHour} : {timeMin}
        </div>
      </div>
      <div>
        <label htmlFor="">Insan sayi</label>
          <input type="number" value={guests}
          onChange={handlePeopleNum}/>
        </div>
    </FormWrapper>
  );
}






