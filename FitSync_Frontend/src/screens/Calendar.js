import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Calendar.module.css";
import Sidebar from "../components/Sidebar";

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentMonth = currentDate.getMonth() + 1; // Get month as a 1-based value

  const navigate = useNavigate();

  const periodDays = [23, 26, 27, 28];
  const ovulationDays = [30, 31];

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  };

  const handleDayClick = (day) => {
    navigate(`/day/${currentMonth}/${day}`);
  };


  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className={styles.emptyCell}></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <div 
        key={i} 
        className={styles.calendarCell} 
        onClick={() => handleDayClick(i)}
        style={{ cursor: "pointer" }}
      >
        {i}
        {periodDays.includes(i) && <span className={styles.periodDot}></span>}
        {ovulationDays.includes(i) && <span className={styles.ovulationDot}></span>}
      </div>
    );
  }

  return (
      <div className="d-flex flex-column vh-100" style={{ background: "linear-gradient(to right, #E0BBE4, #FFDFD3, #FFD3B6)" }}>
      {/* Top Navigation */}
      <div className="d-flex justify-content-between align-items-center p-3">
        <Sidebar />
        </div>
    <div className={styles.calendarContainer}>
      <h2 className={styles.calendarTitle}>When was your last period?</h2>
      <div className={styles.calendarWrapper}>
        <div className={styles.calendarHeader}>
          <button onClick={() => changeMonth(-1)} className={styles.navButton}>&#9665;</button>
          <span className={styles.monthText}>
            {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
          </span>
          <button onClick={() => changeMonth(1)} className={styles.navButton}>&#9655;</button>
        </div>
        <div className={styles.weekdays}>
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
            <div key={day} className={styles.weekday}>{day[0]}</div>
          ))}
        </div>
        <div className={styles.daysGrid}>{days}</div>
      </div>
    </div>
    </div>
  );
};

export default CustomCalendar;
