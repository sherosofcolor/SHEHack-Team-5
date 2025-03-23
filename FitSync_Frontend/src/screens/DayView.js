import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./WorkoutPlan.module.css";
import Sidebar from "../components/Sidebar";

const DayView = () => {

  const { month, day } = useParams();

  // Convert month number to month name
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthIndex = parseInt(month, 10) - 1; // Convert to 0-based index
  const monthName = monthNames[monthIndex] || "Unknown Month";

  // Construct the full date
  const fullDate = `${monthName} ${day}, 2025`;

  // Video embed with a thumbnail preview
  const [showVideo, setShowVideo] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with actual video
  const thumbnailUrl = "/assets/thumbnail.png";

  return (
    <div className={styles.container}>
{/* Top Navigation */}
<div className="d-flex justify-content-between align-items-center p-3">
        <Sidebar />
        </div>
      {/* Workout Header */}
      <h2 className={styles.workoutTitle}>
        <span>{fullDate}</span> Workout
      </h2>
      <p className={styles.subtitle}>
        <strong>Today, we’re focusing on low intensity</strong>
        <br />
        Perform each set <strong>3 times</strong>
      </p>

      {/* Workout Cards */}
      <div className={styles.workoutGrid}>
        <div className={styles.workoutCard}>
          <h3>Set 1 - Lower Body</h3>
          <p><strong>Warm up (10 min)</strong><br />Low incline jog</p>
          <p><strong>10 reps each</strong></p>
          <ul>
            <li>Bodyweight squats</li>
            <li>Glute Bridges</li>
            <li>Side Lunges</li>
          </ul>
        </div>

        <div className={styles.workoutCard}>
          <h3>Set 2 - Upper Body</h3>
          <p><strong>10 reps each</strong></p>
          <ul>
            <li>Push ups</li>
            <li>Standing overhead press with dumbbells</li>
            <li>Standing RDL <span className={styles.smallText}>(Romanian Deadlift)</span></li>
          </ul>
        </div>

        <div className={styles.workoutCard}>
          <h3>Set 3 - Core / Stability</h3>
          <p><strong>10 reps each</strong></p>
          <ul>
            <li>Dead Bug</li>
            <li>Seated Leg Raises</li>
            <li>Bird Dog</li>
          </ul>
          <p><strong>Cool Down</strong></p>
          <ul>
            <li>Cobra stretch</li>
            <li>Child Pose</li>
            <li>Quad Stretch</li>
            <li>Standing forward fold</li>
          </ul>
        </div>
      </div>

      <div className={styles.videoContainer}>
  <h3>Workout Demo</h3>

  {!showVideo ? (
    // Show the thumbnail before clicking
    <img
      src={thumbnailUrl}
      alt="Workout Video Thumbnail"
      style={{ cursor: "pointer", width: "677px", height: "391px" }}
      onClick={() => setShowVideo(true)}
    />
  ) : (
    // Show the iframe after clicking the thumbnail
    <iframe
      width="677"
      height="391"
      src="https://www.youtube.com/embed/Af-VOp7yrxg"
      title="Quick Total Body Power Yoga"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ display: "block", margin: "auto" }}
    ></iframe>
  )}
</div>
    </div>
  );
};

export default DayView;

