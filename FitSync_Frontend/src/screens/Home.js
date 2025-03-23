import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const navigate = useNavigate();

  const today = new Date();
  const month = today.getMonth() + 1; // Convert 0-based month to 1-based
  const day = today.getDate();
  const monthNumber = today.getMonth(); 

  const [dayOfWeek, setDayOfWeek] = useState('');
  const [date, setDate] = useState('');

  // Array to map month numbers to month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    setDayOfWeek(today.toLocaleDateString('en-US', { weekday: 'long' })); // e.g., "Monday"
    setDate(today.toLocaleDateString('en-US', options)); // e.g., "March 23, 2025"
  }, []);

  return (
    <div className="d-flex flex-column vh-100" style={{ background: "linear-gradient(to right, #E0BBE4, #FFDFD3, #FFD3B6)" }}>
      {/* Top Navigation */}
      <div className="d-flex justify-content-between align-items-center p-3">
        <div className="fw-bold display-5 text-dark ms-4">
        <p>{dayOfWeek}, {monthNames[monthNumber]} {day}</p>
        </div>
      </div>
      {/* Top Navigation */}
      <div className="d-flex justify-content-between align-items-center p-3">
        <Sidebar />
        </div>
      {/* Main Content */}
      <div className="d-flex flex-grow-1 align-items-center justify-content-between p-4">
        {/* Function Buttons */}
        <div className="d-flex flex-column gap-3">
          <button onClick={() => navigate(`/workout-plan/${month}/${day}`)} className="btn btn-light shadow-sm px-4 py-2 rounded-pill fs-5 border border-secondary">
           Today's workout plan
          </button>
          <button onClick={() => navigate("/calendar")} className="btn btn-light shadow-sm px-4 py-2 rounded-pill fs-5 border border-secondary">
            Calendar
          </button>
        </div>

        {/* Welcome Message */}
        <div className="text-end text-dark me-4">
          <h1 className="display-3 fw-bold">FitSync</h1>
          <h2 className="display-5 fw-bold mt-2">Welcome <span className="fst-italic">Nishitha</span>,</h2>
          <p className="mt-2 h5">You're near the end of your luteal phase</p>
          <p className="mt-1 h6">You may be feeling irritated, take things slow today and focus on low intensity exercises.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
