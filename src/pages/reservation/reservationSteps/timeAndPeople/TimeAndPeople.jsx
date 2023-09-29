import { FormWrapper } from "../formWrapper/FormWrapper";
import "./timeAndPeople.scss";

export function TimeAndPeople({ updateFields, timeHour, timeMin, guests }) {
  const handleHoursChange = (event) => {
    const newHours = event.target.value;
    if (newHours <= 23) {
      updateFields({ timeHour: newHours });
    }
  };

  const handleMinutesChange = (event) => {
    const newMinutes = event.target.value;
    if (newMinutes <= 59) {
      updateFields({ timeMin: newMinutes });
    }
  };

  const handlePeopleNum = (event) => {
    updateFields({ guests: event.target.value });
  };

  return (
    <FormWrapper title="Vaxtı və qonaqları seçin">
      <div className="timeAndPeople">
        <div className="timeSection">
          <div className="hourSection">
            <label htmlFor="hours">Saat:</label>
            <input
              type="number"
              id="hours"
              value={timeHour}
              onChange={handleHoursChange}
            />
          </div>
          <div className="minuteSection">
            <label htmlFor="minutes">Dəqiqə:</label>
            <input
              type="number"
              id="minutes"
              value={timeMin}
              onChange={handleMinutesChange}
            />
          </div>
        </div>
        <div className="peopleSection">
          <label htmlFor="">İnsan sayı</label>
          <input type="number" value={guests} onChange={handlePeopleNum} />
        </div>
      </div>
    </FormWrapper>
  );
}
