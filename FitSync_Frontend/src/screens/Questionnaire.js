import styles from "./Questionnaire.module.css"; // Importing CSS Module
import Sidebar from "../components/Sidebar";
import React, {useState} from "react";

const Questionnaire = ({questions}) => {
    const [firstDay, setFirstDay] = useState('');

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
            <h2 className={styles.Title}>
            Questionnaire
            </h2>
            <p className={styles.subtitle}>
            Before we get started, let's get to know each other!
            </p>
    
            {/* Questions */}
            <div className={styles.questionContainer}>                
                
                <div className={styles.questionCard}>
                <h3>What are your fitness goals?</h3>
                    <ul>       
                    <li> Get more toned</li>
                    <li> Build muscle</li>
                    <li> Become more active</li>
                    <li> Lose weight"</li>     
                    </ul>
                </div>

                <div className={styles.questionCard}>
                <h3>How active are you throughout the day?</h3>
                    <ul>       
                    <li> less than 1 hour</li>
                    <li> 1-3 hours</li>
                    <li> 4-6 hours</li>
                    <li> 7+ hours</li>   
                    </ul>
                </div>

                <div className={styles.questionCard}>
                <h3>Is your menstrual cycle...</h3>
                    <ul>       
                    <li>Irregular</li>
                    <li> On time</li>
                    </ul>
                </div>

                <div className={styles.questionCard}>
                <h3>How do you typically feel throughout your cycle?</h3>
                    <ul>       
                    <li> Low energy / intense fatigue </li>
                    <li> Typically energetic</li>
                    <li> I am tired in the morning, and more energetic at night</li>
                    <li> I crash in the middle of the day </li>   
                    </ul>
                </div>

                <div className={styles.questionCard}>
                <h3>Do you have any of these conditions that affect your workouts?</h3>
                    <ul>       
                    <li> PCOS </li>
                    <li> Endometriosis </li>
                    <li> Hyperthyroidism </li>
                    <li> None </li>   
                    </ul>
                </div>

                <div className={styles.questionCard}>
                <h3>How many days a week do plan to work out?</h3>
                    <ul>       
                    <li> 3 days </li>
                    <li> 4-5 days </li>
                    <li> 6 days </li>
                    <li> 7 days </li>   
                    </ul>
                </div>

                <div className={styles.questionCard}>
                <h3> When was your last period? </h3>
                <form>
                    <label for="first-day">First day: </label> 
                    <input value={firstDay} onChange={(e) => setFirstDay(e.target.value)} 
                    type="text" placeholder="MM/DD/YYYY" id="first-day" name="first-day" required/>
                    <br></br>
                    <label for="last-day">Last day: </label> 
                    <input value={firstDay} onChange={(e) => setFirstDay(e.target.value)} 
                    type="text" placeholder="MM/DD/YYYY" id="last-day" name="last-day" required/>
                </form>
                
                </div>

            </div>
        </div>
        
    )
}

export default Questionnaire;