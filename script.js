// 7-Day Workout Split Database
// Monday: Upper, Tuesday: Lower, Wednesday: Rest, Thursday: Push, Friday: Pull, Saturday: Legs, Sunday: Rest

const workoutDatabase = {
    monday: {
        name: "Upper Body",
        focus: "Chest, Back, Shoulders",
        exercises: {
            bodyweight: [
                { name: "Push-Ups", sets: "4", reps: "12-15", rest: "90s", equipment: "bodyweight", formTips: "Keep body straight, elbows at 45°, chest to floor, full range of motion", target: "Chest, Triceps, Shoulders" },
                { name: "Inverted Rows", sets: "3", reps: "10-15", rest: "60s", equipment: "bodyweight", formTips: "Use table or door, pull chest to bar, squeeze shoulder blades", target: "Upper Back, Biceps" },
                { name: "Pike Push-Ups", sets: "3", reps: "8-12", rest: "90s", equipment: "bodyweight", formTips: "Form inverted V, nose to floor between hands", target: "Shoulders" },
                { name: "Decline Push-Ups", sets: "3", reps: "10-15", rest: "90s", equipment: "bodyweight", formTips: "Feet elevated on chair, maintain straight body", target: "Upper Chest" },
                { name: "Diamond Push-Ups", sets: "3", reps: "8-12", rest: "60s", equipment: "bodyweight", formTips: "Hands form diamond, elbows tucked", target: "Triceps" },
                { name: "Superman Holds", sets: "3", reps: "30-45s", rest: "60s", equipment: "bodyweight", formTips: "Lift chest and legs, squeeze back", target: "Lower Back" }
            ],
            dumbbell: [
                { name: "Dumbbell Press", sets: "4", reps: "10-12", rest: "2min", equipment: "dumbbell", formTips: "Lie on floor or bench, press up, full lockout", target: "Chest, Shoulders" },
                { name: "Dumbbell Rows", sets: "4", reps: "10-12/arm", rest: "90s", equipment: "dumbbell", formTips: "Support on bench, pull to hip, squeeze", target: "Lats, Mid Back" },
                { name: "Dumbbell Shoulder Press", sets: "3", reps: "10-12", rest: "2min", equipment: "dumbbell", formTips: "Seated or standing, press straight up", target: "Shoulders" },
                { name: "Dumbbell Flyes", sets: "3", reps: "12-15", rest: "90s", equipment: "dumbbell", formTips: "Wide arc motion, squeeze at top", target: "Chest" },
                { name: "Dumbbell Pullovers", sets: "3", reps: "12-15", rest: "60s", equipment: "dumbbell", formTips: "Stretch at bottom, pull with lats", target: "Lats, Chest" },
                { name: "Lateral Raises", sets: "3", reps: "12-15", rest: "60s", equipment: "dumbbell", formTips: "Raise to shoulder height, control", target: "Side Delts" }
            ]
        }
    },
    tuesday: {
        name: "Lower Body",
        focus: "Quads, Glutes, Hamstrings, Calves",
        exercises: {
            bodyweight: [
                { name: "Bodyweight Squats", sets: "4", reps: "20-25", rest: "90s", equipment: "bodyweight", formTips: "Feet shoulder-width, knees track toes, depth to parallel", target: "Quads, Glutes" },
                { name: "Bulgarian Split Squats", sets: "3", reps: "12-15/leg", rest: "90s", equipment: "bodyweight", formTips: "Rear foot elevated, front leg drives", target: "Quads, Glutes" },
                { name: "Walking Lunges", sets: "3", reps: "15-20/leg", rest: "60s", equipment: "bodyweight", formTips: "Step forward, knee doesn't pass toes", target: "Quads, Glutes" },
                { name: "Jump Squats", sets: "3", reps: "12-15", rest: "90s", equipment: "bodyweight", formTips: "Explosive jump, land softly", target: "Quads, Power" },
                { name: "Glute Bridges", sets: "3", reps: "20-25", rest: "60s", equipment: "bodyweight", formTips: "Thrust hips up, squeeze glutes", target: "Glutes, Hamstrings" },
                { name: "Calf Raises", sets: "4", reps: "20-25", rest: "45s", equipment: "bodyweight", formTips: "Full range, pause at top", target: "Calves" }
            ],
            dumbbell: [
                { name: "Goblet Squats", sets: "4", reps: "12-15", rest: "2min", equipment: "dumbbell", formTips: "Hold dumbbell at chest, deep squat", target: "Quads, Glutes" },
                { name: "Dumbbell Romanian Deadlift", sets: "4", reps: "10-12", rest: "90s", equipment: "dumbbell", formTips: "Hinge at hips, feel hamstring stretch", target: "Hamstrings, Glutes" },
                { name: "Dumbbell Bulgarian Split Squats", sets: "3", reps: "10-12/leg", rest: "90s", equipment: "dumbbell", formTips: "Hold dumbbells, rear foot elevated", target: "Quads, Glutes" },
                { name: "Dumbbell Lunges", sets: "3", reps: "12-15/leg", rest: "60s", equipment: "dumbbell", formTips: "Dumbbells at sides, alternate legs", target: "Quads, Glutes" },
                { name: "Single-Leg Calf Raises", sets: "4", reps: "15-20/leg", rest: "45s", equipment: "dumbbell", formTips: "Hold dumbbell, full range", target: "Calves" },
                { name: "Dumbbell Step-Ups", sets: "3", reps: "12/leg", rest: "60s", equipment: "dumbbell", formTips: "Step onto chair, drive through heel", target: "Quads, Glutes" }
            ]
        }
    },
    wednesday: {
        name: "Rest Day",
        focus: "Recovery & Mobility",
        isRestDay: true
    },
    thursday: {
        name: "Push",
        focus: "Chest, Shoulders, Triceps",
        exercises: {
            bodyweight: [
                { name: "Push-Ups", sets: "4", reps: "15-20", rest: "90s", equipment: "bodyweight", formTips: "Full range, explosive up", target: "Chest, Triceps" },
                { name: "Diamond Push-Ups", sets: "3", reps: "10-15", rest: "60s", equipment: "bodyweight", formTips: "Hands form diamond", target: "Triceps" },
                { name: "Pike Push-Ups", sets: "3", reps: "10-12", rest: "90s", equipment: "bodyweight", formTips: "Inverted V, nose to floor", target: "Shoulders" },
                { name: "Dips (Using Chairs)", sets: "3", reps: "8-12", rest: "90s", equipment: "bodyweight", formTips: "Lean forward for chest", target: "Chest, Triceps" },
                { name: "Decline Push-Ups", sets: "3", reps: "12-15", rest: "90s", equipment: "bodyweight", formTips: "Feet elevated", target: "Upper Chest" },
                { name: "Bench Dips", sets: "3", reps: "15-20", rest: "60s", equipment: "bodyweight", formTips: "Lower to 90°", target: "Triceps" }
            ],
            dumbbell: [
                { name: "Dumbbell Floor Press", sets: "4", reps: "10-12", rest: "2min", equipment: "dumbbell", formTips: "Lie on floor, full lockout", target: "Chest, Triceps" },
                { name: "Dumbbell Flyes", sets: "3", reps: "12-15", rest: "90s", equipment: "dumbbell", formTips: "Wide arc, squeeze chest", target: "Chest" },
                { name: "Dumbbell Shoulder Press", sets: "3", reps: "10-12", rest: "90s", equipment: "dumbbell", formTips: "Press straight up", target: "Shoulders" },
                { name: "Lateral Raises", sets: "3", reps: "15-20", rest: "60s", equipment: "dumbbell", formTips: "Raise to shoulder height", target: "Side Delts" },
                { name: "Overhead Tricep Extension", sets: "3", reps: "12-15", rest: "60s", equipment: "dumbbell", formTips: "Elbows close to head", target: "Triceps" },
                { name: "Front Raises", sets: "3", reps: "12-15", rest: "60s", equipment: "dumbbell", formTips: "Raise to eye level", target: "Front Delts" }
            ]
        }
    },
    friday: {
        name: "Pull",
        focus: "Back, Biceps, Rear Delts",
        exercises: {
            bodyweight: [
                { name: "Pull-Ups/Chin-Ups", sets: "4", reps: "6-10", rest: "2-3min", equipment: "bodyweight", formTips: "Full hang, chin over bar (use band if needed)", target: "Lats, Biceps" },
                { name: "Inverted Rows", sets: "4", reps: "12-15", rest: "90s", equipment: "bodyweight", formTips: "Pull chest to bar, squeeze shoulder blades", target: "Upper Back" },
                { name: "Superman Holds", sets: "3", reps: "30-45s", rest: "60s", equipment: "bodyweight", formTips: "Lift chest and legs", target: "Lower Back" },
                { name: "Negative Pull-Ups", sets: "3", reps: "5-8", rest: "2min", equipment: "bodyweight", formTips: "Jump to top, slow descent", target: "Lats, Biceps" },
                { name: "Doorway Curls", sets: "3", reps: "12-15", rest: "60s", equipment: "bodyweight", formTips: "Use towel on doorknob", target: "Biceps" },
                { name: "Plank to Down Dog", sets: "3", reps: "12-15", rest: "60s", equipment: "bodyweight", formTips: "Transition between positions", target: "Core, Shoulders" }
            ],
            dumbbell: [
                { name: "Dumbbell Rows", sets: "4", reps: "10-12/arm", rest: "90s", equipment: "dumbbell", formTips: "Pull to hip, squeeze at top", target: "Lats, Mid Back" },
                { name: "Dumbbell Pullovers", sets: "3", reps: "12-15", rest: "90s", equipment: "dumbbell", formTips: "Stretch at bottom", target: "Lats, Chest" },
                { name: "Bent-Over Rear Delt Flyes", sets: "3", reps: "15-20", rest: "60s", equipment: "dumbbell", formTips: "Hinge at hips, raise to sides", target: "Rear Delts" },
                { name: "Dumbbell Bicep Curls", sets: "3", reps: "12-15", rest: "60s", equipment: "dumbbell", formTips: "Elbows locked at sides", target: "Biceps" },
                { name: "Hammer Curls", sets: "3", reps: "12-15", rest: "60s", equipment: "dumbbell", formTips: "Neutral grip", target: "Biceps, Forearms" },
                { name: "Shrugs", sets: "3", reps: "15-20", rest: "60s", equipment: "dumbbell", formTips: "Lift shoulders to ears", target: "Traps" }
            ]
        }
    },
    saturday: {
        name: "Legs",
        focus: "Full Lower Body Emphasis",
        exercises: {
            bodyweight: [
                { name: "Bodyweight Squats", sets: "4", reps: "25-30", rest: "90s", equipment: "bodyweight", formTips: "Deep squat, full range", target: "Quads, Glutes" },
                { name: "Single-Leg Glute Bridges", sets: "3", reps: "15/leg", rest: "60s", equipment: "bodyweight", formTips: "One leg extended, squeeze glute", target: "Glutes" },
                { name: "Bulgarian Split Squats", sets: "3", reps: "15/leg", rest: "90s", equipment: "bodyweight", formTips: "Rear elevated, focus on glute", target: "Glutes, Quads" },
                { name: "Jump Lunges", sets: "3", reps: "10-12/leg", rest: "90s", equipment: "bodyweight", formTips: "Explosive switch, land soft", target: "Quads, Power" },
                { name: "Wall Sit", sets: "3", reps: "45-60s", rest: "60s", equipment: "bodyweight", formTips: "Back against wall, 90° knees", target: "Quads" },
                { name: "Calf Raises", sets: "4", reps: "25-30", rest: "45s", equipment: "bodyweight", formTips: "Full range, pause at top", target: "Calves" }
            ],
            dumbbell: [
                { name: "Dumbbell Romanian Deadlift", sets: "4", reps: "12-15", rest: "2min", equipment: "dumbbell", formTips: "Deep hamstring stretch, squeeze glutes", target: "Hamstrings, Glutes" },
                { name: "Goblet Squats", sets: "4", reps: "15-20", rest: "90s", equipment: "dumbbell", formTips: "Deep squat, chest up", target: "Quads, Glutes" },
                { name: "Single-Leg Deadlifts", sets: "3", reps: "12/leg", rest: "60s", equipment: "dumbbell", formTips: "Balance, hinge forward", target: "Hamstrings, Balance" },
                { name: "Weighted Glute Bridges", sets: "4", reps: "15-20", rest: "60s", equipment: "dumbbell", formTips: "Dumbbell on hips, squeeze hard", target: "Glutes" },
                { name: "Dumbbell Reverse Lunges", sets: "3", reps: "15/leg", rest: "60s", equipment: "dumbbell", formTips: "Step back, focus on glute", target: "Glutes, Quads" },
                { name: "Single-Leg Calf Raises", sets: "4", reps: "20/leg", rest: "45s", equipment: "dumbbell", formTips: "Hold dumbbell, full range", target: "Calves" }
            ]
        }
    },
    sunday: {
        name: "Rest Day",
        focus: "Recovery & Mobility",
        isRestDay: true
    }
};

// Current state
let currentDay = '';
let currentDuration = 60;
let currentEquipment = 'both';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    detectCurrentDay();
    setupEventListeners();
    displayWorkout(currentDay, currentDuration, currentEquipment);
});

// Detect current day
function detectCurrentDay() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = new Date();
    const dayName = days[today.getDay()];
    currentDay = dayName;
    
    const workout = workoutDatabase[dayName];
    document.getElementById('todayTitle').textContent = workout.name.toUpperCase();
    document.getElementById('todayFocus').textContent = workout.focus;
    document.getElementById('todayDate').textContent = today.toLocaleDateString('en-US', { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });
    
    // Highlight current day
    document.querySelectorAll('.day-card').forEach(card => {
        if (card.dataset.day === dayName) {
            card.classList.add('active');
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Day selection
    document.querySelectorAll('.day-card').forEach(card => {
        card.addEventListener('click', function() {
            currentDay = this.dataset.day;
            document.querySelectorAll('.day-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            displayWorkout(currentDay, currentDuration, currentEquipment);
        });
    });
    
    // Equipment selection
    document.querySelectorAll('.equipment-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentEquipment = this.dataset.equipment;
            document.querySelectorAll('.equipment-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            displayWorkout(currentDay, currentDuration, currentEquipment);
        });
    });
    
    // Duration selection
    document.querySelectorAll('.duration-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentDuration = parseInt(this.dataset.duration);
            document.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            displayWorkout(currentDay, currentDuration, currentEquipment);
        });
    });
}

// Display workout
function displayWorkout(day, duration, equipment) {
    const workout = workoutDatabase[day];
    
    document.getElementById('workoutTitle').textContent = workout.name;
    document.getElementById('workoutMeta').textContent = workout.focus;
    
    // Check if rest day
    if (workout.isRestDay) {
        document.getElementById('restDayMessage').classList.remove('hidden');
        document.getElementById('warmupSection').classList.add('hidden');
        document.getElementById('exerciseList').classList.add('hidden');
        document.getElementById('cooldownSection').classList.add('hidden');
        return;
    } else {
        document.getElementById('restDayMessage').classList.add('hidden');
        document.getElementById('warmupSection').classList.remove('hidden');
        document.getElementById('exerciseList').classList.remove('hidden');
        document.getElementById('cooldownSection').classList.remove('hidden');
    }
    
    // Get exercises based on equipment
    let exercises = [];
    if (equipment === 'both') {
        exercises = [...workout.exercises.bodyweight, ...workout.exercises.dumbbell];
    } else if (equipment === 'bodyweight') {
        exercises = workout.exercises.bodyweight;
    } else if (equipment === 'dumbbell') {
        exercises = workout.exercises.dumbbell;
    }
    
    // Filter by duration
    if (duration === 15) {
        exercises = exercises.slice(0, 4);
    } else if (duration === 30) {
        exercises = exercises.slice(0, 5);
    }
    
    // Display exercises
    const exerciseList = document.getElementById('exerciseList');
    exerciseList.innerHTML = '';
    
    exercises.forEach((exercise, index) => {
        const exerciseCard = createExerciseCard(exercise, index + 1);
        exerciseList.appendChild(exerciseCard);
    });
}

// Create exercise card
function createExerciseCard(exercise, number) {
    const card = document.createElement('div');
    card.className = 'exercise-item';
    
    const youtubeQuery = encodeURIComponent(exercise.name + ' exercise tutorial');
    const youtubeUrl = `https://www.youtube.com/results?search_query=${youtubeQuery}`;
    
    const badgeClass = exercise.equipment === 'bodyweight' ? 'bodyweight' : 'dumbbell';
    
    card.innerHTML = `
        <div class="exercise-header">
            <div class="exercise-number">${number}</div>
            <div class="exercise-title">
                <h4>${exercise.name}</h4>
                <div class="exercise-target">${exercise.target}</div>
                <span class="equipment-badge ${badgeClass}">${exercise.equipment}</span>
            </div>
            <input type="checkbox" class="exercise-checkbox" title="Mark as complete">
        </div>
        
        <div class="exercise-stats">
            <div class="stat-box">
                <div class="stat-label">Sets</div>
                <div class="stat-value">${exercise.sets}</div>
            </div>
            <div class="stat-box">
                <div class="stat-label">Reps</div>
                <div class="stat-value">${exercise.reps}</div>
            </div>
            <div class="stat-box">
                <div class="stat-label">Rest</div>
                <div class="stat-value">${exercise.rest}</div>
            </div>
        </div>
        
        <div class="exercise-form">
            <strong>Form Tips:</strong>
            <p>${exercise.formTips}</p>
        </div>
        
        <a href="${youtubeUrl}" target="_blank" class="youtube-btn">
            ▶ Watch Tutorial on YouTube
        </a>
    `;
    
    return card;
}

// Checkbox functionality
document.addEventListener('change', function(e) {
    if (e.target.classList.contains('exercise-checkbox')) {
        if (e.target.checked) {
            e.target.closest('.exercise-item').style.opacity = '0.6';
        } else {
            e.target.closest('.exercise-item').style.opacity = '1';
        }
    }
});
