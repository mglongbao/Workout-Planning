// 7-Day Workout Split Database with Alternatives
// Monday: Upper, Tuesday: Lower, Wednesday: Rest, Thursday: Push, Friday: Pull, Saturday: Legs, Sunday: Rest

const workoutDatabase = {
    monday: {
        name: "Upper Body",
        focus: "Chest, Back, Shoulders",
        exercises: {
            bodyweight: [
                { name: "Push-Ups", sets: "4", reps: "12-15", rest: "90s", equipment: "bodyweight", formTips: "Keep body straight, elbows at 45°, chest to floor, full range of motion", target: "Chest, Triceps, Shoulders", alternatives: ["Wide Push-Ups", "Incline Push-Ups", "Archer Push-Ups"] },
                { name: "Inverted Rows", sets: "3", reps: "10-15", rest: "60s", equipment: "bodyweight", formTips: "Use table or door, pull chest to bar, squeeze shoulder blades", target: "Upper Back, Biceps", alternatives: ["Door Frame Rows", "Towel Rows", "Table Rows"] },
                { name: "Pike Push-Ups", sets: "3", reps: "8-12", rest: "90s", equipment: "bodyweight", formTips: "Form inverted V, nose to floor between hands", target: "Shoulders", alternatives: ["Wall Handstand Hold", "Elevated Pike Push-Ups", "Handstand Push-Ups"] },
                { name: "Decline Push-Ups", sets: "3", reps: "10-15", rest: "90s", equipment: "bodyweight", formTips: "Feet elevated on chair, maintain straight body", target: "Upper Chest", alternatives: ["Feet-Elevated Push-Ups", "Deficit Push-Ups", "Explosive Push-Ups"] },
                { name: "Diamond Push-Ups", sets: "3", reps: "8-12", rest: "60s", equipment: "bodyweight", formTips: "Hands form diamond, elbows tucked", target: "Triceps", alternatives: ["Close-Grip Push-Ups", "Tricep Push-Ups", "Sphinx Push-Ups"] },
                { name: "Superman Holds", sets: "3", reps: "30-45s", rest: "60s", equipment: "bodyweight", formTips: "Lift chest and legs, squeeze back", target: "Lower Back", alternatives: ["Back Extensions", "Reverse Snow Angels", "Prone Y-Raises"] }
            ],
            dumbbell: [
                { name: "Dumbbell Press", sets: "4", reps: "10-12", rest: "2min", equipment: "dumbbell", formTips: "Lie on floor or bench, press up, full lockout", target: "Chest, Shoulders", alternatives: ["Floor Press", "Incline Dumbbell Press", "Single-Arm Press"] },
                { name: "Dumbbell Rows", sets: "4", reps: "10-12/arm", rest: "90s", equipment: "dumbbell", formTips: "Support on bench, pull to hip, squeeze", target: "Lats, Mid Back", alternatives: ["Bent-Over Rows", "Renegade Rows", "Chest-Supported Rows"] },
                { name: "Dumbbell Shoulder Press", sets: "3", reps: "10-12", rest: "2min", equipment: "dumbbell", formTips: "Seated or standing, press straight up", target: "Shoulders", alternatives: ["Arnold Press", "Single-Arm Press", "Push Press"] },
                { name: "Dumbbell Flyes", sets: "3", reps: "12-15", rest: "90s", equipment: "dumbbell", formTips: "Wide arc motion, squeeze at top", target: "Chest", alternatives: ["Floor Flyes", "Incline Flyes", "Svend Press"] },
                { name: "Dumbbell Pullovers", sets: "3", reps: "12-15", rest: "60s", equipment: "dumbbell", formTips: "Stretch at bottom, pull with lats", target: "Lats, Chest", alternatives: ["Cross-Bench Pullovers", "Straight-Arm Pulldown", "Floor Pullovers"] },
                { name: "Lateral Raises", sets: "3", reps: "12-15", rest: "60s", equipment: "dumbbell", formTips: "Raise to shoulder height, control", target: "Side Delts", alternatives: ["Leaning Lateral Raises", "Cable Lateral Raises", "Front to Lateral Raises"] }
            ]
        }
    },
    tuesday: {
        name: "Lower Body",
        focus: "Quads, Glutes, Hamstrings, Calves",
        exercises: {
            bodyweight: [
                { name: "Bodyweight Squats", sets: "4", reps: "20-25", rest: "90s", equipment: "bodyweight", formTips: "Feet shoulder-width, knees track toes, depth to parallel", target: "Quads, Glutes", alternatives: ["Sumo Squats", "Narrow Stance Squats", "Pause Squats"] },
                { name: "Bulgarian Split Squats", sets: "3", reps: "12-15/leg", rest: "90s", equipment: "bodyweight", formTips: "Rear foot elevated, front leg drives", target: "Quads, Glutes", alternatives: ["Rear Foot Elevated Split Squats", "Step-Back Lunges", "Split Squats"] },
                { name: "Walking Lunges", sets: "3", reps: "15-20/leg", rest: "60s", equipment: "bodyweight", formTips: "Step forward, knee doesn't pass toes", target: "Quads, Glutes", alternatives: ["Reverse Lunges", "Lateral Lunges", "Curtsy Lunges"] },
                { name: "Jump Squats", sets: "3", reps: "12-15", rest: "90s", equipment: "bodyweight", formTips: "Explosive jump, land softly", target: "Quads, Power", alternatives: ["Box Jumps", "Squat Jumps", "Tuck Jumps"] },
                { name: "Glute Bridges", sets: "3", reps: "20-25", rest: "60s", equipment: "bodyweight", formTips: "Thrust hips up, squeeze glutes", target: "Glutes, Hamstrings", alternatives: ["Single-Leg Glute Bridges", "Hip Thrusts", "Frog Pumps"] },
                { name: "Calf Raises", sets: "4", reps: "20-25", rest: "45s", equipment: "bodyweight", formTips: "Full range, pause at top", target: "Calves", alternatives: ["Single-Leg Calf Raises", "Seated Calf Raises", "Jump Rope"] }
            ],
            dumbbell: [
                { name: "Goblet Squats", sets: "4", reps: "12-15", rest: "2min", equipment: "dumbbell", formTips: "Hold dumbbell at chest, deep squat", target: "Quads, Glutes", alternatives: ["Dumbbell Front Squats", "Sumo Goblet Squats", "Zercher Squats"] },
                { name: "Dumbbell Romanian Deadlift", sets: "4", reps: "10-12", rest: "90s", equipment: "dumbbell", formTips: "Hinge at hips, feel hamstring stretch", target: "Hamstrings, Glutes", alternatives: ["Single-Leg RDL", "Stiff-Leg Deadlift", "Good Mornings"] },
                { name: "Dumbbell Bulgarian Split Squats", sets: "3", reps: "10-12/leg", rest: "90s", equipment: "dumbbell", formTips: "Hold dumbbells, rear foot elevated", target: "Quads, Glutes", alternatives: ["Dumbbell Split Squats", "Dumbbell Step-Ups", "Walking Lunges"] },
                { name: "Dumbbell Lunges", sets: "3", reps: "12-15/leg", rest: "60s", equipment: "dumbbell", formTips: "Dumbbells at sides, alternate legs", target: "Quads, Glutes", alternatives: ["Reverse Lunges", "Walking Lunges", "Lateral Lunges"] },
                { name: "Single-Leg Calf Raises", sets: "4", reps: "15-20/leg", rest: "45s", equipment: "dumbbell", formTips: "Hold dumbbell, full range", target: "Calves", alternatives: ["Double Calf Raises", "Seated Calf Raises", "Donkey Calf Raises"] },
                { name: "Dumbbell Step-Ups", sets: "3", reps: "12/leg", rest: "60s", equipment: "dumbbell", formTips: "Step onto chair, drive through heel", target: "Quads, Glutes", alternatives: ["Box Step-Ups", "Lateral Step-Ups", "High Step-Ups"] }
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
                { name: "Push-Ups", sets: "4", reps: "15-20", rest: "90s", equipment: "bodyweight", formTips: "Full range, explosive up", target: "Chest, Triceps", alternatives: ["Wide Push-Ups", "Explosive Push-Ups", "Plyometric Push-Ups"] },
                { name: "Diamond Push-Ups", sets: "3", reps: "10-15", rest: "60s", equipment: "bodyweight", formTips: "Hands form diamond", target: "Triceps", alternatives: ["Close-Grip Push-Ups", "Triangle Push-Ups", "Tricep Push-Ups"] },
                { name: "Pike Push-Ups", sets: "3", reps: "10-12", rest: "90s", equipment: "bodyweight", formTips: "Inverted V, nose to floor", target: "Shoulders", alternatives: ["Elevated Pike Push-Ups", "Wall Walks", "Handstand Hold"] },
                { name: "Dips (Using Chairs)", sets: "3", reps: "8-12", rest: "90s", equipment: "bodyweight", formTips: "Lean forward for chest", target: "Chest, Triceps", alternatives: ["Bench Dips", "Straight Bar Dips", "Korean Dips"] },
                { name: "Decline Push-Ups", sets: "3", reps: "12-15", rest: "90s", equipment: "bodyweight", formTips: "Feet elevated", target: "Upper Chest", alternatives: ["Feet-Elevated Wide Push-Ups", "Decline Diamond Push-Ups", "Deficit Push-Ups"] },
                { name: "Bench Dips", sets: "3", reps: "15-20", rest: "60s", equipment: "bodyweight", formTips: "Lower to 90°", target: "Triceps", alternatives: ["Tricep Dips", "Chair Dips", "Straight Bar Dips"] }
            ],
            dumbbell: [
                { name: "Dumbbell Floor Press", sets: "4", reps: "10-12", rest: "2min", equipment: "dumbbell", formTips: "Lie on floor, full lockout", target: "Chest, Triceps", alternatives: ["Dumbbell Bench Press", "Single-Arm Floor Press", "Close-Grip Press"] },
                { name: "Dumbbell Flyes", sets: "3", reps: "12-15", rest: "90s", equipment: "dumbbell", formTips: "Wide arc, squeeze chest", target: "Chest", alternatives: ["Incline Flyes", "Decline Flyes", "Hex Press"] },
                { name: "Dumbbell Shoulder Press", sets: "3", reps: "10-12", rest: "90s", equipment: "dumbbell", formTips: "Press straight up", target: "Shoulders", alternatives: ["Arnold Press", "Single-Arm Press", "Z-Press"] },
                { name: "Lateral Raises", sets: "3", reps: "15-20", rest: "60s", equipment: "dumbbell", formTips: "Raise to shoulder height", target: "Side Delts", alternatives: ["Leaning Lateral Raises", "W-Raises", "Lu Raises"] },
                { name: "Overhead Tricep Extension", sets: "3", reps: "12-15", rest: "60s", equipment: "dumbbell", formTips: "Elbows close to head", target: "Triceps", alternatives: ["Skull Crushers", "Tricep Kickbacks", "French Press"] },
                { name: "Front Raises", sets: "3", reps: "12-15", rest: "60s", equipment: "dumbbell", formTips: "Raise to eye level", target: "Front Delts", alternatives: ["Alternating Front Raises", "Plate Front Raises", "High Pulls"] }
            ]
        }
    },
    friday: {
        name: "Pull",
        focus: "Back, Biceps, Rear Delts",
        exercises: {
            bodyweight: [
                { name: "Pull-Ups/Chin-Ups", sets: "4", reps: "6-10", rest: "2-3min", equipment: "bodyweight", formTips: "Full hang, chin over bar (use band if needed)", target: "Lats, Biceps", alternatives: ["Negative Pull-Ups", "Band-Assisted Pull-Ups", "Australian Pull-Ups"] },
                { name: "Inverted Rows", sets: "4", reps: "12-15", rest: "90s", equipment: "bodyweight", formTips: "Pull chest to bar, squeeze shoulder blades", target: "Upper Back", alternatives: ["Wide-Grip Inverted Rows", "Table Rows", "Door Frame Rows"] },
                { name: "Superman Holds", sets: "3", reps: "30-45s", rest: "60s", equipment: "bodyweight", formTips: "Lift chest and legs", target: "Lower Back", alternatives: ["Back Extensions", "Bird Dogs", "Prone Y-Raises"] },
                { name: "Negative Pull-Ups", sets: "3", reps: "5-8", rest: "2min", equipment: "bodyweight", formTips: "Jump to top, slow descent", target: "Lats, Biceps", alternatives: ["Isometric Holds", "Eccentric Chin-Ups", "Band-Assisted Negatives"] },
                { name: "Doorway Curls", sets: "3", reps: "12-15", rest: "60s", equipment: "bodyweight", formTips: "Use towel on doorknob", target: "Biceps", alternatives: ["Towel Curls", "Isometric Holds", "Self-Resistance Curls"] },
                { name: "Plank to Down Dog", sets: "3", reps: "12-15", rest: "60s", equipment: "bodyweight", formTips: "Transition between positions", target: "Core, Shoulders", alternatives: ["Dolphin Push-Ups", "Pike Position Holds", "Inchworms"] }
            ],
            dumbbell: [
                { name: "Dumbbell Rows", sets: "4", reps: "10-12/arm", rest: "90s", equipment: "dumbbell", formTips: "Pull to hip, squeeze at top", target: "Lats, Mid Back", alternatives: ["Bent-Over Rows", "Renegade Rows", "Kroc Rows"] },
                { name: "Dumbbell Pullovers", sets: "3", reps: "12-15", rest: "90s", equipment: "dumbbell", formTips: "Stretch at bottom", target: "Lats, Chest", alternatives: ["Cross-Bench Pullovers", "Decline Pullovers", "Single-Arm Pullovers"] },
                { name: "Bent-Over Rear Delt Flyes", sets: "3", reps: "15-20", rest: "60s", equipment: "dumbbell", formTips: "Hinge at hips, raise to sides", target: "Rear Delts", alternatives: ["Face Pulls", "Reverse Flyes", "Wide-Grip Rows"] },
                { name: "Dumbbell Bicep Curls", sets: "3", reps: "12-15", rest: "60s", equipment: "dumbbell", formTips: "Elbows locked at sides", target: "Biceps", alternatives: ["Alternating Curls", "Concentration Curls", "Zottman Curls"] },
                { name: "Hammer Curls", sets: "3", reps: "12-15", rest: "60s", equipment: "dumbbell", formTips: "Neutral grip", target: "Biceps, Forearms", alternatives: ["Cross-Body Hammer Curls", "Rope Hammer Curls", "Preacher Hammer Curls"] },
                { name: "Shrugs", sets: "3", reps: "15-20", rest: "60s", equipment: "dumbbell", formTips: "Lift shoulders to ears", target: "Traps", alternatives: ["Behind-the-Back Shrugs", "Upright Rows", "Farmer's Walk"] }
            ]
        }
    },
    saturday: {
        name: "Legs",
        focus: "Full Lower Body Emphasis",
        exercises: {
            bodyweight: [
                { name: "Bodyweight Squats", sets: "4", reps: "25-30", rest: "90s", equipment: "bodyweight", formTips: "Deep squat, full range", target: "Quads, Glutes", alternatives: ["Sumo Squats", "Jump Squats", "Pistol Squat Progression"] },
                { name: "Single-Leg Glute Bridges", sets: "3", reps: "15/leg", rest: "60s", equipment: "bodyweight", formTips: "One leg extended, squeeze glute", target: "Glutes", alternatives: ["Hip Thrusts", "Frog Pumps", "Marching Glute Bridges"] },
                { name: "Bulgarian Split Squats", sets: "3", reps: "15/leg", rest: "90s", equipment: "bodyweight", formTips: "Rear elevated, focus on glute", target: "Glutes, Quads", alternatives: ["Split Squats", "Skater Squats", "Shrimp Squats"] },
                { name: "Jump Lunges", sets: "3", reps: "10-12/leg", rest: "90s", equipment: "bodyweight", formTips: "Explosive switch, land soft", target: "Quads, Power", alternatives: ["Alternating Lunges", "Walking Lunges", "Reverse Lunges"] },
                { name: "Wall Sit", sets: "3", reps: "45-60s", rest: "60s", equipment: "bodyweight", formTips: "Back against wall, 90° knees", target: "Quads", alternatives: ["Single-Leg Wall Sit", "Sumo Wall Sit", "Elevated Wall Sit"] },
                { name: "Calf Raises", sets: "4", reps: "25-30", rest: "45s", equipment: "bodyweight", formTips: "Full range, pause at top", target: "Calves", alternatives: ["Single-Leg Calf Raises", "Jump Rope", "Calf Bounce"] }
            ],
            dumbbell: [
                { name: "Dumbbell Romanian Deadlift", sets: "4", reps: "12-15", rest: "2min", equipment: "dumbbell", formTips: "Deep hamstring stretch, squeeze glutes", target: "Hamstrings, Glutes", alternatives: ["Single-Leg RDL", "Stiff-Leg Deadlift", "B-Stance RDL"] },
                { name: "Goblet Squats", sets: "4", reps: "15-20", rest: "90s", equipment: "dumbbell", formTips: "Deep squat, chest up", target: "Quads, Glutes", alternatives: ["Front Squats", "Sumo Goblet Squats", "Pause Goblet Squats"] },
                { name: "Single-Leg Deadlifts", sets: "3", reps: "12/leg", rest: "60s", equipment: "dumbbell", formTips: "Balance, hinge forward", target: "Hamstrings, Balance", alternatives: ["B-Stance RDL", "Kickstand RDL", "Single-Leg RDL"] },
                { name: "Weighted Glute Bridges", sets: "4", reps: "15-20", rest: "60s", equipment: "dumbbell", formTips: "Dumbbell on hips, squeeze hard", target: "Glutes", alternatives: ["Hip Thrusts", "Single-Leg Hip Thrusts", "Frog Pumps"] },
                { name: "Dumbbell Reverse Lunges", sets: "3", reps: "15/leg", rest: "60s", equipment: "dumbbell", formTips: "Step back, focus on glute", target: "Glutes, Quads", alternatives: ["Forward Lunges", "Walking Lunges", "Deficit Reverse Lunges"] },
                { name: "Single-Leg Calf Raises", sets: "4", reps: "20/leg", rest: "45s", equipment: "dumbbell", formTips: "Hold dumbbell, full range", target: "Calves", alternatives: ["Seated Calf Raises", "Donkey Calf Raises", "Jump Calf Raises"] }
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
let swappedExercises = {}; // Track swapped exercises

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
    
    document.querySelectorAll('.day-card').forEach(card => {
        if (card.dataset.day === dayName) {
            card.classList.add('active');
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    document.querySelectorAll('.day-card').forEach(card => {
        card.addEventListener('click', function() {
            currentDay = this.dataset.day;
            swappedExercises = {}; // Reset swaps when changing days
            document.querySelectorAll('.day-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            displayWorkout(currentDay, currentDuration, currentEquipment);
        });
    });
    
    document.querySelectorAll('.equipment-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentEquipment = this.dataset.equipment;
            swappedExercises = {}; // Reset swaps when changing equipment
            document.querySelectorAll('.equipment-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            displayWorkout(currentDay, currentDuration, currentEquipment);
        });
    });
    
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
    
    let exercises = [];
    if (equipment === 'both') {
        exercises = [...workout.exercises.bodyweight, ...workout.exercises.dumbbell];
    } else if (equipment === 'bodyweight') {
        exercises = workout.exercises.bodyweight;
    } else if (equipment === 'dumbbell') {
        exercises = workout.exercises.dumbbell;
    }
    
    if (duration === 15) {
        exercises = exercises.slice(0, 4);
    } else if (duration === 30) {
        exercises = exercises.slice(0, 5);
    }
    
    const exerciseList = document.getElementById('exerciseList');
    exerciseList.innerHTML = '';
    
    exercises.forEach((exercise, index) => {
        const exerciseCard = createExerciseCard(exercise, index);
        exerciseList.appendChild(exerciseCard);
    });
}

// Create exercise card
function createExerciseCard(exercise, index) {
    const card = document.createElement('div');
    card.className = 'exercise-item';
    card.dataset.exerciseIndex = index;
    
    const youtubeQuery = encodeURIComponent(exercise.name + ' exercise tutorial');
    const youtubeUrl = `https://www.youtube.com/results?search_query=${youtubeQuery}`;
    
    const badgeClass = exercise.equipment === 'bodyweight' ? 'bodyweight' : 'dumbbell';
    
    // Create alternatives dropdown
    let alternativesHtml = '';
    if (exercise.alternatives && exercise.alternatives.length > 0) {
        alternativesHtml = `
            <div class="alternatives-section">
                <button class="swap-btn" onclick="showAlternatives(${index})">
                    🔄 Swap Exercise
                </button>
                <div class="alternatives-dropdown hidden" id="alt-${index}">
                    <p class="alt-title">Choose Alternative:</p>
                    ${exercise.alternatives.map((alt, altIndex) => `
                        <button class="alt-option" onclick="swapExercise(${index}, '${alt}')">
                            ${alt}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="exercise-header">
            <div class="exercise-number">${index + 1}</div>
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
        
        <div class="exercise-actions">
            <a href="${youtubeUrl}" target="_blank" class="youtube-btn">
                ▶ Watch Tutorial on YouTube
            </a>
            ${alternativesHtml}
        </div>
    `;
    
    return card;
}

// Show alternatives dropdown
function showAlternatives(index) {
    const dropdown = document.getElementById(`alt-${index}`);
    dropdown.classList.toggle('hidden');
}

// Swap exercise with alternative
function swapExercise(index, alternativeName) {
    const workout = workoutDatabase[currentDay];
    let exercises = [];
    
    if (currentEquipment === 'both') {
        exercises = [...workout.exercises.bodyweight, ...workout.exercises.dumbbell];
    } else if (currentEquipment === 'bodyweight') {
        exercises = workout.exercises.bodyweight;
    } else if (currentEquipment === 'dumbbell') {
        exercises = workout.exercises.dumbbell;
    }
    
    if (currentDuration === 15) {
        exercises = exercises.slice(0, 4);
    } else if (currentDuration === 30) {
        exercises = exercises.slice(0, 5);
    }
    
    const exercise = exercises[index];
    const originalName = swappedExercises[index] ? swappedExercises[index].original : exercise.name;
    
    // Update exercise name
    const exerciseCard = document.querySelector(`[data-exercise-index="${index}"]`);
    const titleElement = exerciseCard.querySelector('.exercise-title h4');
    titleElement.textContent = alternativeName;
    
    // Update YouTube link
    const youtubeBtn = exerciseCard.querySelector('.youtube-btn');
    const youtubeQuery = encodeURIComponent(alternativeName + ' exercise tutorial');
    youtubeBtn.href = `https://www.youtube.com/results?search_query=${youtubeQuery}`;
    
    // Track the swap
    swappedExercises[index] = {
        original: originalName,
        current: alternativeName
    };
    
    // Hide dropdown
    const dropdown = document.getElementById(`alt-${index}`);
    dropdown.classList.add('hidden');
    
    // Add visual indicator
    if (!exerciseCard.querySelector('.swapped-badge')) {
        const badge = document.createElement('span');
        badge.className = 'swapped-badge';
        badge.textContent = '🔄 Alternative';
        exerciseCard.querySelector('.exercise-title').appendChild(badge);
    }
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
