// Exercise Database
const exerciseDatabase = ''' + open('exercise_database.json').read() + ''';

// Workout Programs  
const workoutPrograms = ''' + open('workout_programs.json').read() + ''';

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadExerciseLibrary('all');
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Generate workout button
    document.getElementById('generateBtn').addEventListener('click', generateWorkout);
    
    // Library filter buttons
    document.querySelectorAll('.lib-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.lib-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadExerciseLibrary(this.dataset.muscle);
        });
    });
}

// Generate workout based on user selections
function generateWorkout() {
    const muscleGroup = document.getElementById('muscleGroup').value;
    const equipment = document.getElementById('equipment').value;
    const duration = document.getElementById('duration').value;
    const difficulty = document.getElementById('difficulty').value;
    
    if (!muscleGroup || !equipment || !duration || !difficulty) {
        alert('Please select all options to generate a workout');
        return;
    }
    
    // Get appropriate exercises
    const exercises = getExercisesForWorkout(muscleGroup, equipment, duration, difficulty);
    
    // Display workout
    displayWorkout(muscleGroup, equipment, duration, difficulty, exercises);
    
    // Scroll to workout
    document.getElementById('workoutDisplay').scrollIntoView({ behavior: 'smooth' });
}

// Get exercises based on selections
function getExercisesForWorkout(muscle, equip, duration, diff) {
    if (!exerciseDatabase[muscle]) return [];
    
    let allExercises = [];
    
    // Get exercises by equipment type
    if (equip === 'all') {
        Object.values(exerciseDatabase[muscle]).forEach(equipType => {
            allExercises = allExercises.concat(equipType);
        });
    } else {
        allExercises = exerciseDatabase[muscle][equip] || [];
    }
    
    // Filter by difficulty
    let filtered = allExercises.filter(ex => {
        if (diff === 'beginner') return ex.difficulty === 'beginner' || ex.difficulty === 'intermediate';
        if (diff === 'intermediate') return ex.difficulty === 'beginner' || ex.difficulty === 'intermediate';
        return true; // advanced gets all
    });
    
    // Determine number of exercises based on duration
    let exerciseCount;
    if (duration === '15') exerciseCount = 4;
    else if (duration === '30') exerciseCount = 5;
    else exerciseCount = 7;
    
    // Return appropriate number of exercises
    return filtered.slice(0, exerciseCount);
}

// Display generated workout
function displayWorkout(muscle, equipment, duration, difficulty, exercises) {
    const display = document.getElementById('workoutDisplay');
    const content = document.getElementById('workoutContent');
    
    if (exercises.length === 0) {
        content.innerHTML = '<p style="color: #999;">No exercises found for this combination. Try different options.</p>';
        display.classList.remove('hidden');
        return;
    }
    
    let html = `
        <div class="workout-info">
            <h3>Workout Overview</h3>
            <p><strong>Target:</strong> ${muscle.charAt(0).toUpperCase() + muscle.slice(1)}</p>
            <p><strong>Equipment:</strong> ${equipment.charAt(0).toUpperCase() + equipment.slice(1)}</p>
            <p><strong>Duration:</strong> ${duration} minutes</p>
            <p><strong>Level:</strong> ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</p>
            <p><strong>Total Exercises:</strong> ${exercises.length}</p>
        </div>
        
        <div class="warmup-section" style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h3 style="color: #1976d2; margin-bottom: 10px;">🔥 Warm-Up (5-10 minutes)</h3>
            <p style="color: #555;">
                ${duration === '15' ? 
                    'Quick warm-up: 2 min light cardio, dynamic stretching (arm circles, leg swings)' :
                    duration === '30' ?
                    '5 min cardio + dynamic stretching (arm circles, band pull-aparts, leg swings)' :
                    '5 min cardio + 5 min dynamic stretching + warm-up sets (50%, 70%, 90% working weight)'
                }
            </p>
        </div>
    `;
    
    exercises.forEach((exercise, index) => {
        html += createExerciseCard(exercise, index + 1);
    });
    
    // Add cooldown
    html += `
        <div class="cooldown-section" style="background: #f3e5f5; padding: 20px; border-radius: 10px; margin-top: 20px;">
            <h3 style="color: #7b1fa2; margin-bottom: 10px;">🧘 Cool-Down (3-5 minutes)</h3>
            <p style="color: #555;">Static stretching for worked muscles, deep breathing, hydration</p>
        </div>
    `;
    
    content.innerHTML = html;
    display.classList.remove('hidden');
}

// Create exercise card HTML
function createExerciseCard(exercise, number) {
    const youtubeQuery = encodeURIComponent(exercise.name + ' exercise tutorial');
    const youtubeUrl = `https://www.youtube.com/results?search_query=${youtubeQuery}`;
    
    return `
        <div class="exercise-card">
            <div class="exercise-header">
                <div class="exercise-title">
                    <h4>${number}. ${exercise.name}</h4>
                </div>
                <span class="equipment-badge">${exercise.difficulty || 'intermediate'}</span>
            </div>
            
            <div class="exercise-details">
                <div class="detail-item">
                    <div class="detail-label">Sets</div>
                    <div class="detail-value">${exercise.sets || '3'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Reps</div>
                    <div class="detail-value">${exercise.reps || '10-12'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Rest</div>
                    <div class="detail-value">${exercise.rest || '90s'}</div>
                </div>
            </div>
            
            ${exercise.form_tips ? `
                <div class="exercise-notes">
                    <strong>Form Tips:</strong> ${exercise.form_tips}
                </div>
            ` : ''}
            
            ${exercise.progression ? `
                <p style="color: #666; font-size: 0.95rem; margin-top: 10px;">
                    <strong>Progression:</strong> ${exercise.progression}
                </p>
            ` : ''}
            
            ${exercise.alternatives && exercise.alternatives.length > 0 ? `
                <p style="color: #666; font-size: 0.95rem; margin-top: 8px;">
                    <strong>Alternatives:</strong> ${exercise.alternatives.join(', ')}
                </p>
            ` : ''}
            
            <a href="${youtubeUrl}" target="_blank" class="youtube-btn">
                ▶ Watch Tutorial on YouTube
            </a>
        </div>
    `;
}

// Load exercise library
function loadExerciseLibrary(muscleFilter) {
    const library = document.getElementById('exerciseLibrary');
    let html = '';
    
    if (muscleFilter === 'all') {
        // Show all exercises
        Object.keys(exerciseDatabase).forEach(muscle => {
            Object.keys(exerciseDatabase[muscle]).forEach(equipType => {
                exerciseDatabase[muscle][equipType].forEach(exercise => {
                    html += createLibraryCard(exercise, muscle, equipType);
                });
            });
        });
    } else {
        // Show filtered muscle group
        if (exerciseDatabase[muscleFilter]) {
            Object.keys(exerciseDatabase[muscleFilter]).forEach(equipType => {
                exerciseDatabase[muscleFilter][equipType].forEach(exercise => {
                    html += createLibraryCard(exercise, muscleFilter, equipType);
                });
            });
        }
    }
    
    library.innerHTML = html || '<p style="text-align: center; color: #999;">No exercises found</p>';
}

// Create library card
function createLibraryCard(exercise, muscle, equipment) {
    const youtubeQuery = encodeURIComponent(exercise.name + ' exercise tutorial');
    const youtubeUrl = `https://www.youtube.com/results?search_query=${youtubeQuery}`;
    
    return `
        <div class="exercise-card">
            <div class="exercise-header">
                <div class="exercise-title">
                    <h4>${exercise.name}</h4>
                    <p style="color: #999; font-size: 0.9rem;">${muscle.charAt(0).toUpperCase() + muscle.slice(1)}</p>
                </div>
                <span class="equipment-badge">${equipment}</span>
            </div>
            
            <div class="exercise-details">
                <div class="detail-item">
                    <div class="detail-label">Sets</div>
                    <div class="detail-value">${exercise.sets || '3'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Reps</div>
                    <div class="detail-value">${exercise.reps || '10-12'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Difficulty</div>
                    <div class="detail-value" style="font-size: 0.9rem;">${exercise.difficulty || 'int'}</div>
                </div>
            </div>
            
            ${exercise.form_tips ? `
                <div class="exercise-notes">
                    ${exercise.form_tips}
                </div>
            ` : ''}
            
            <a href="${youtubeUrl}" target="_blank" class="youtube-btn">
                ▶ Watch Tutorial
            </a>
        </div>
    `;
}
