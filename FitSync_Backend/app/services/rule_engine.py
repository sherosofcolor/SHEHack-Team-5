import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report


data = {
    'Phase': ['Menstrual', 'Follicular', 'Ovulatory', 'Luteal'],
    'Fitness Goals': ['Gentle Recovery', 'Strength and Endurance', 'High-Intensity Training', 'Moderate Balance'],
    'Activity Level': ['Low', 'Moderate', 'High', 'Moderate'],
    'Cycle Regularity': ['Irregular', 'Regular', 'Regular', 'Irregular'],
    'Energy Levels': ['Low', 'High', 'Very High', 'Moderate'],
    'Health Conditions': ['None', 'None', 'None', 'None'],
    'Workout Frequency': [3, 5, 6, 4],
    'Workout Plan': [
        {
            'Name': 'Gentle Recovery',
            'Warm-up': ['Gentle cardio: walking or light cycling', 'Gentle yoga poses: child’s pose, pigeon pose'],
            'Set 1': ['Stretching: cat-cow, seated forward fold'],
            'Set 2': ['Restorative exercises: gentle swimming or restorative yoga'],
            'Cool down': ['Hydration and relaxation']
        },
        {
            'Name': 'Strength and Endurance',
            'Warm-up': ['Cardiovascular exercises: running, cycling, swimming', 'Yoga poses: warrior, tree pose'],
            'Set 1': ['Strength training: weightlifting, resistance training'],
            'Set 2': ['High-intensity interval training (HIIT): short bursts of high-intensity exercise'],
            'Cool down': ['Stretching and relaxation']
        },
        {
            'Name': 'High-Intensity Training',
            'Warm-up': ['Resistance training: weightlifting, bodyweight exercises'],
            'Set 1': ['High-Intensity Interval Training (HIIT): short bursts of high-intensity exercise'],
            'Set 2': ['Yoga: challenging poses like inversions or arm balances'],
            'Cool down': ['Pilates and relaxation']
        },
        {
            'Name': 'Moderate Balance',
            'Warm-up': ['Low-impact cardio: walking, cycling, swimming'],
            'Set 1': ['Strength training: light weights, bodyweight exercises'],
            'Set 2': ['Yoga and Pilates: restorative poses and core-strengthening exercises'],
            'Cool down': ['Stretching and mindfulness practices']
        }
    ]
}


df = pd.DataFrame(data)


le_phase = LabelEncoder()
le_fitness_goals = LabelEncoder()
le_activity_level = LabelEncoder()
le_cycle_regularity = LabelEncoder()
le_energy_levels = LabelEncoder()


df['Phase'] = le_phase.fit_transform(df['Phase'])
df['Fitness Goals'] = le_fitness_goals.fit_transform(df['Fitness Goals'])
df['Activity Level'] = le_activity_level.fit_transform(df['Activity Level'])
df['Cycle Regularity'] = le_cycle_regularity.fit_transform(df['Cycle Regularity'])
df['Energy Levels'] = le_energy_levels.fit_transform(df['Energy Levels'])


X = df[['Fitness Goals', 'Activity Level', 'Cycle Regularity', 'Energy Levels', 'Workout Frequency']]
y = df['Phase']


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


model = RandomForestClassifier(n_estimators=100, random_state=42)


model.fit(X_train, y_train)


y_pred = model.predict(X_test)


accuracy = accuracy_score(y_test, y_pred)
report = classification_report(y_test, y_pred)

print("Accuracy:", accuracy)
print("Classification Report:\n", report)

def predict_phase(user_input):
    user_input = pd.DataFrame({
        'Fitness Goals': [user_input['fitness_goals']],
        'Activity Level': [user_input['activity_level']],
        'Cycle Regularity': [user_input['cycle_regularity']],
        'Energy Levels': [user_input['energy_levels']],
        'Workout Frequency': [user_input['workout_frequency']]
    })

    user_input['Fitness Goals'] = le_fitness_goals.transform(user_input['Fitness Goals'])
    user_input['Activity Level'] = le_activity_level.transform(user_input['Activity Level'])
    user_input['Cycle Regularity'] = le_cycle_regularity.transform(user_input['Cycle Regularity'])
    user_input['Energy Levels'] = le_energy_levels.transform(user_input['Energy Levels'])
    
    predicted_phase = model.predict(user_input)
    phase_map = {0: 'Follicular', 1: 'Luteal', 2: 'Menstrual', 3: 'Ovulatory'}
    
    return phase_map[predicted_phase[0]]

def generate_full_cycle_workout_plan():

    phases = ['Menstrual', 'Follicular', 'Ovulatory', 'Luteal']
    phase_days = [5, 10, 3, 10] 
    
    day = 1
    phase_index = 0
    for days in phase_days:
        for i in range(days):
            user_input = {
                'fitness_goals': 'Gentle Recovery' if phases[phase_index] == 'Menstrual' else 'Strength and Endurance' if phases[phase_index] == 'Follicular' else 'High-Intensity Training' if phases[phase_index] == 'Ovulatory' else 'Moderate Balance',
                'activity_level': 'Low' if phases[phase_index] == 'Menstrual' else 'Moderate' if phases[phase_index] == 'Follicular' else 'High' if phases[phase_index] == 'Ovulatory' else 'Moderate',
                'cycle_regularity': 'Irregular' if phases[phase_index] == 'Menstrual' else 'Regular' if phases[phase_index] == 'Follicular' else 'Regular' if phases[phase_index] == 'Ovulatory' else 'Irregular',
                'energy_levels': 'Low' if phases[phase_index] == 'Menstrual' else 'High' if phases[phase_index] == 'Follicular' else 'Very High' if phases[phase_index] == 'Ovulatory' else 'Moderate',
                'workout_frequency': 3 if phases[phase_index] == 'Menstrual' else 5 if phases[phase_index] == 'Follicular' else 6 if phases[phase_index] == 'Ovulatory' else 4
            }
            
            predicted_phase = predict_phase(user_input)
            
            workout_plans = {
                'Menstrual': {
                    'Name': 'Gentle Recovery',
                    'Warm-up': ['Gentle cardio: walking or light cycling', 'Gentle yoga poses: child’s pose, pigeon pose'],
                    'Set 1': ['Stretching: cat-cow, seated forward fold'],
                    'Set 2': ['Restorative exercises: gentle swimming or restorative yoga'],
                    'Cool down': ['Hydration and relaxation']
                },
                'Follicular': {
                    'Name': 'Strength and Endurance',
                    'Warm-up': ['Cardiovascular exercises: running, cycling, swimming', 'Yoga poses: warrior, tree pose'],
                    'Set 1': ['Strength training: weightlifting, resistance training'],
                    'Set 2': ['High-intensity interval training (HIIT): short bursts of high-intensity exercise'],
                    'Cool down': ['Stretching and relaxation']
                },
                'Ovulatory': {
                    'Name': 'High-Intensity Training',
                    'Warm-up': ['Resistance training: weightlifting, bodyweight exercises'],
                    'Set 1': ['High-Intensity Interval Training (HIIT): short bursts of high-intensity exercise'],
                    'Set 2': ['Yoga: challenging poses like inversions or arm balances'],
                    'Cool down': ['Pilates and relaxation']
                },
                'Luteal': {
                    'Name': 'Moderate Balance',
                    'Warm-up': ['Low-impact cardio: walking, cycling, swimming'],
                    'Set 1': ['Strength training: light weights, bodyweight exercises'],
                    'Set 2': ['Yoga and Pilates: restorative poses and core-strengthening exercises'],
                    'Cool down': ['Stretching and mindfulness practices']
                }
            }
            
            print(f"Day {day}: {phases[phase_index]}\n")
            print(f"Workout Plan: {workout_plans[predicted_phase]['Name']}\n")
            print(f"Warm-up:\n")
            for warm_up in workout_plans[predicted_phase]['Warm-up']:
                print(f"- {warm_up}\n")
            print(f"Sets:\n")
            for i, set_exercises in enumerate([workout_plans[predicted_phase]['Set 1'], workout_plans[predicted_phase]['Set 2']], start=1):
                print(f"Set {i}:\n")
                for exercise in set_exercises:
                    print(f"- {exercise}\n")
            print(f"Cool down:\n")
            for cool_down in workout_plans[predicted_phase]['Cool down']:
                print(f"- {cool_down}\n")
            print("\n")
            
            day += 1
        phase_index += 1

generate_full_cycle_workout_plan()


def store_workout_plan(user_data):
    pass






def fetch_montly_plan(user_id):
    pass





def fetch_day_plan(user_id, day):
    pass