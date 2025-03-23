import styles from "./WorkoutPlan.module.css"; // Importing CSS Module
import Sidebar from "../components/Sidebar";

const Questionnaire = () => {
    return (
        <div className={styles.container}>
            {/* Navbar */}
            <div className={styles.navbar}>
                <h1 className={styles.logo}>FitSync</h1>
                <div className={styles.navIcons}>
                    <Sidebar />
                </div>
            </div>
    
            {/* Header */}
            <h2 className={styles.workoutTitle}>
            Questionnaire
            </h2>
            <p className={styles.subtitle}>
            <strong>Before we get started, let's get to know each other!</strong>
            </p>
    
            {/* Questions */}
            <div className={styles.questionContainer}>

                <div className={styles.workoutCard}>
                    <h3>What are your fitness goals? </h3>
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
        
    )
}

export default Questionnaire;