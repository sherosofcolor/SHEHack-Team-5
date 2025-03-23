import React from "react";
import styles from "./WorkoutPlan.module.css"; // Importing CSS Module
import Sidebar from "../components/Sidebar";

const WorkoutPlan = () => {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <div className={styles.navbar}>
        <h1 className={styles.logo}>FitSync</h1>
        <div className={styles.navIcons}>
          <Sidebar />
        </div>
      </div>

      {/* Workout Header */}
      <h2 className={styles.workoutTitle}>
        June <span className={styles.highlight}>20<sup>th</sup></span> Workout
      </h2>
      <p className={styles.subtitle}>
        <strong>Today, we’re focusing on low intensity</strong>
        <br />
        perform each set <strong>3 times</strong>
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
    </div>
  );
};

export default WorkoutPlan;
