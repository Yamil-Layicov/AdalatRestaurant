import { useState } from "react";
import { FormWrapper } from "../formWrapper/FormWrapper";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import './calendarForm.scss';

const daysOfWeek = [
  "Bazar",
  "Bazar er:",
  "Çər: axş:",
  "Çərş:",
  "Cümə axş:",
  "Cümə",
  "Şənbə",
];

const months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "İyun",
  "İyul",
  "Avqust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];

export function CalendarForm({updateFields, activeDayData, setActiveDayData}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const totalDaysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  const renderDaysOfWeek = daysOfWeek.map((day) => (
    <div key={day} className="day-of-week">
      {day}
    </div>
  ));

  const renderCalendarDays = () => {
    const calendarDays = [];

    for (let i = 1; i <= totalDaysInMonth; i++) {
      calendarDays.push(
        <div key={i} className={`calendar-day ${activeDayData === i && "activeDay"}`} onClick={() => handleDayClick(i)}>
          {i}
        </div>
      );
    }

    for (let i = 0; i < startingDayOfWeek; i++) {
      calendarDays.unshift(<div key={`empty-${i}`} className="empty-day" />);
    }

    return calendarDays;
  };

  const handleDayClick = (day) => {
    const clickedDate = new Date(year, month, day);
    setSelectedDate(clickedDate);
    updateFields({currentDate:[clickedDate.getDate(),months[clickedDate.getMonth()],clickedDate.getFullYear()]})
    setActiveDayData(day)
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <FormWrapper title="Tarix seçin ">
      <div className="calendar">
        <div className="calendarHeader">
          <div>
            {months[month]} {year}
            <span onClick={goToNextMonth}>
              <ChevronRightOutlinedIcon fontSize="large" />
            </span>
            <span onClick={goToPreviousMonth}>
              <ChevronLeftOutlinedIcon fontSize="large" />
            </span>
          </div>
        </div>
        <div className="weeksName">
          {renderDaysOfWeek.map((weak, index) => (
            <div className="weak" key={index}>
              {weak}
            </div>
          ))}
        </div>
        <div className="dayBox">{renderCalendarDays()}</div>
      </div>
    </FormWrapper>
  );
}
