import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing Router, Route, and Switch
import './App.css';
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Calendar from "./screens/Calendar";
import MonthlyReport from "./screens/MonthlyReport";
import WorkoutPlan from "./screens/WorkoutPlan";
import Login from "./screens/Login";
import DayView from "./screens/DayView";
import Questionnaire from "./screens/Questionnaire";

function App() {
    return (
      <Router> {/* Wrap everything inside Router */}
        <div className="App">
          <header className="App-header">
          </header>
  
          <div className="main-content">
            <Routes> {/* Use Routes instead of Switch in React Router v6 */}
              <Route path="/" element={<Login />} /> {/* Login Route */}
              <Route path="/home" element={<Home />} /> {/* Home Route */}
              <Route path="/day/:month/:day" element={<DayView />} />
              <Route path="/settings" element={<Settings />} /> Settings Route
              <Route path="/calendar" element={<Calendar />} /> {/* Calendar Route */}
              <Route path="/monthly-report" element={<MonthlyReport />} /> {/* Monthly Report Route */}
              <Route path="/workout-plan/:month/:day" element={<DayView />} />
              <Route path="/questionnaire" element={<Questionnaire />} /> {/* Questionnaire Route */} 
            </Routes>
          </div>
        </div>
      </Router>
    );
}

export default App;
