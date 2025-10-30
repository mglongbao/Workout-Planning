// 5-Day Split Workout Data
const weeklyWorkouts = {
    monday: {
        name: "Upper Body",
        focus: "Chest, Back, Shoulders",
        exercises: [
            {
                name: "Push-Ups",
                sets: "4",
                reps: "12-15",
                rest: "90s",
                equipment: "bodyweight",
                form_tips: "Keep body straight, elbows at 45°, full range of motion",
                target: "Chest, Triceps, Shoulders"
            },
            {
                name: "Dumbbell Rows",
                sets: "4",
                reps: "10-12/arm",
                rest: "90s",
                equipment: "dumbbell",
                form_tips: "Support on bench, pull to hip, squeeze at top",
                target: "Lats, Mid Back"
            },
            {
                name: "Dumbbell Shoulder Press",
                sets: "3",
                reps: "10-12",
                rest: "90s",
                equipment: "dumbbell",
                form_tips: "Core tight, press straight up, full lockout",
                target: "Shoulders"
            },
            {
                name: "Inverted Rows",
                sets: "3",
                reps: "10-15",
                rest: "60s",
                equipment: "bodyweight",
                form_tips: "Use table or door, pull chest to bar",
                target: "Upper Back, Biceps"
            },
            {
                name: "Pike Push-Ups",
                sets: "3",
                reps: "8-12",
                rest: "60s",
                equipment: "bodyweight",
                form_tips: "Form inverted V, nose to floor",
                target: "Shoulders, Upper Chest"
            },
            {
                name: "Dumbbell Pullovers",
                sets: "3",
                reps: "12-15",
                rest: "60s",
                equipment: "dumbbell",
                form_tips: "Stretch at bottom, pull with lats",
                target: "Lats, Chest"
            }
        ]
    },
    tuesday: {
        name: "Lower Body 1 (Quad Focus)",
        focus: "Quads, Glutes, Calves",
        exercises: [
            {
                name: "Goblet Squats",
                sets: "4",
                reps: "12-15",
                rest: "2min",
                equipment: "dumbbell",
                form_tips: "Hold dumbbell at chest, deep squat, heels down",
                target: "Quads, Glutes"
            },
            {
                name: "Bulgarian Split Squats",
                sets: "3",
                reps: "10-12/leg",
                rest: "90s",
                equipment: "bodyweight/dumbbell",
                form_tips: "Rear foot elevated, 90% weight on front leg",
                target: "Quads, Glutes"
            },
            {
                name: "Dumbbell Romanian Deadlift",
                sets: "3",
                reps: "10-12",
                rest: "90s",
                equipment: "dumbbell",
                form_tips: "Slight knee bend, hinge at hips, back straight",
                target: "Hamstrings, Glutes"
            },
            {
                name: "Walking Lunges",
                sets: "3",
                reps: "12-15/leg",
                rest: "60s",
                equipment: "bodyweight/dumbbell",
                form_tips: "Step forward, knee doesn't pass toes",
                target: "Quads, Glutes"
            },
            {
                name: "Single-Leg Calf Raises",
                sets: "4",
                reps: "15-20/leg",
                rest: "45s",
                equipment: "dumbbell",
                form_tips: "Full range, pause at top",
                target: "Calves"
            },
            {
                name: "Glute Bridges",
                sets: "3",
                reps: "15-20",
                rest: "60s",
                equipment: "bodyweight",
                form_tips: "Squeeze glutes at top, hold 2s",
                target: "Glutes, Hamstrings"
            }
        ]
    },
    wednesday: {
        name: "Abs & Cardio",
        focus: "Core Strength & Conditioning",
        exercises: [
            {
                name: "Plank",
                sets: "3",
                reps: "45-60s",
                rest: "45s",
                equipment: "bodyweight",
                form_tips: "Body straight, squeeze core and glutes",
                target: "Full Core"
            },
            {
                name: "V-Ups",
                sets: "3",
                reps: "12-15",
                rest: "45s",
                equipment: "bodyweight",
                form_tips: "Simultaneous arms and legs, touch toes",
                target: "Upper & Lower Abs"
            },
            {
                name: "Russian Twists",
                sets: "3",
                reps: "30-40",
                rest: "45s",
                equipment: "bodyweight/dumbbell",
                form_tips: "Lean back, rotate torso, touch floor each side",
                target: "Obliques"
            },
            {
                name: "Mountain Climbers",
                sets: "3",
                reps: "30-40",
                rest: "45s",
                equipment: "bodyweight",
                form_tips: "Plank position, drive knees to chest fast",
                target: "Core, Cardio"
            },
            {
                name: "Dead Bug",
                sets: "3",
                reps: "12-15/side",
                rest: "45s",
                equipment: "bodyweight",
                form_tips: "Back flat, opposite arm and leg extend",
                target: "Core Stability"
            },
            {
                name: "Burpees",
                sets: "3",
                reps: "10-15",
                rest: "60s",
                equipment: "bodyweight",
                form_tips: "Full push-up, explosive jump",
                target: "Full Body Cardio"
            }
        ]
    },
    thursday: {
        name: "Push",
        focus: "Chest, Shoulders, Triceps",
        exercises: [
            {
                name: "Dumbbell Floor Press",
                sets: "4",
                reps: "10-12",
                rest: "2min",
                equipment: "dumbbell",
                form_tips: "Lie on floor, elbows 45°, full lockout",
                target: "Chest, Triceps"
            },
            {
                name: "Dumbbell Flyes",
                sets: "3",
                reps: "12-15",
                rest: "90s",
                equipment: "dumbbell",
                form_tips: "Slight elbow bend, wide arc, squeeze at top",
                target: "Chest"
            },
            {
                name: "Lateral Raises",
                sets: "3",
                reps: "15-20",
                rest: "60s",
                equipment: "dumbbell",
                form_tips: "Slight lean, raise to shoulder height",
                target: "Side Delts"
            },
            {
                name: "Diamond Push-Ups",
                sets: "3",
                reps: "10-15",
                rest: "60s",
                equipment: "bodyweight",
                form_tips: "Hands form diamond, elbows tucked",
                target: "Triceps, Inner Chest"
            },
            {
                name: "Overhead Tricep Extension",
                sets: "3",
                reps: "12-15",
                rest: "60s",
                equipment: "dumbbell",
                form_tips: "Elbows close to head, full stretch",
                target: "Triceps"
            },
            {
                name: "Front Raises",
                sets: "3",
                reps: "12-15",
                rest: "60s",
                equipment: "dumbbell",
                form_tips: "Raise to eye level, no momentum",
                target: "Front Delts"
            }
        ]
    },
    friday: {
        name: "Pull",
        focus: "Back, Biceps, Rear Delts",
        exercises: [
            {
                name: "Pull-Ups/Chin-Ups",
                sets: "4",
                reps: "6-10",
                rest: "2-3min",
                equipment: "bodyweight",
                form_tips: "Full hang, chin over bar, controlled descent",
                target: "Lats, Biceps"
            },
            {
                name: "Dumbbell Rows",
                sets: "4",
                reps: "10-12/arm",
                rest: "90s",
                equipment: "dumbbell",
                form_tips: "Support on bench, pull to hip, squeeze",
                target: "Lats, Mid Back"
            },
            {
                name: "Inverted Rows",
                sets: "3",
                reps: "12-15",
                rest: "90s",
                equipment: "bodyweight",
                form_tips: "Body straight, pull chest to bar",
                target: "Upper Back"
            },
            {
                name: "Bent-Over Rear Delt Flyes",
                sets: "3",
                reps: "15-20",
                rest: "60s",
                equipment: "dumbbell",
                form_tips: "Hinge at hips, raise to sides, pinkies up",
                target: "Rear Delts"
            },
            {
                name: "Dumbbell Bicep Curls",
                sets: "3",
                reps: "12-15",
                rest: "60s",
                equipment: "dumbbell",
                form_tips: "Elbows locked at sides, full range",
                target: "Biceps"
            },
            {
                name: "Hammer Curls",
                sets: "3",
                reps: "12-15",
                rest: "60s",
                equipment: "dumbbell",
                form_tips: "Neutral grip, controlled movement",
                target: "Biceps, Forearms"
            }
        ]
    },
    saturday: {
        name: "Lower Body 2 (Glute/Hamstring Focus)",
        focus: "Glutes, Hamstrings, Posterior Chain",
        exercises: [
            {
                name: "Dumbbell Romanian Deadlift",
                sets: "4",
                reps: "10-12",
                rest: "2min",
                equipment: "dumbbell",
                form_tips: "Hinge at hips, feel hamstring stretch",
                target: "Hamstrings, Glutes"
            },
            {
                name: "Bulgarian Split Squats",
                sets: "3",
                reps: "10-12/leg",
                rest: "90s",
                equipment: "dumbbell",
                form_tips: "Focus on glute squeeze at top",
                target: "Glutes, Quads"
            },
            {
                name: "Single-Leg Deadlifts",
                sets: "3",
                reps: "10/leg",
                rest: "60s",
                equipment: "dumbbell",
                form_tips: "Balance on one leg, hinge forward",
                target: "Hamstrings, Glutes, Balance"
            },
            {
                name: "Glute Bridges",
                sets: "4",
                reps: "15-20",
                rest: "60s",
                equipment: "bodyweight/dumbbell",
                form_tips: "Drive through heels, squeeze at top",
                target: "Glutes"
            },
            {
                name: "Reverse Lunges",
                sets: "3",
                reps: "12/leg",
                rest: "60s",
                equipment: "dumbbell",
                form_tips: "Step back, focus on glute activation",
                target: "Glutes, Quads"
            },
            {
                name: "Calf Raises",
                sets: "4",
                reps: "15-20",
                rest: "45s",
                equipment: "dumbbell",
                form_tips: "Full range, pause at top and bottom",
                target: "Calves"
            }
        ]
    },
    sunday: {
        name: "Rest Day",
        focus: "Recovery & Mobility",
        message: "Great work this week! Today is for recovery. Focus on:\n\n• Light stretching or yoga\n• Foam rolling tight muscles\n• Walking or light activity\n• Proper nutrition and hydration\n• 7-9 hours of sleep\n\nYour muscles grow during rest. Come back stronger tomorrow!"
    }
};

// Day name mapping
const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// Exercise Database
const exerciseDatabase = {
    chest: {
        bodyweight: [
            {
                name: "Push-Ups",
                difficulty: "beginner",
                sets: "3-4",
                reps: "8-15",
                rest: "60-90s",
                form_tips: "Keep body straight, elbows at 45°, chest to floor, full range of motion",
                progression: "Add resistance band, elevate feet, add pause at bottom",
                alternatives: ["Incline Push-Ups", "Wide Push-Ups", "Diamond Push-Ups"]
            },
            {
                name: "Diamond Push-Ups",
                difficulty: "intermediate",
                sets: "3",
                reps: "8-12",
                rest: "90s",
                form_tips: "Hands form diamond shape, elbows tucked, slow controlled movement",
                progression: "Elevate feet, add resistance, increase tempo",
                alternatives: ["Close-Grip Push-Ups", "Tricep Push-Ups"]
            },
            {
                name: "Decline Push-Ups",
                difficulty: "intermediate",
                sets: "3",
                reps: "8-15",
                rest: "90s",
                form_tips: "Feet elevated on chair/bench, maintain straight body, full range",
                progression: "Higher elevation, add weight, slow eccentric",
                alternatives: ["Pike Push-Ups", "Elevated Push-Ups"]
            },
            {
                name: "Pike Push-Ups",
                difficulty: "intermediate",
                sets: "3",
                reps: "8-12",
                rest: "90s",
                form_tips: "Form inverted V, nose to floor between hands, elbows tucked",
                progression: "Elevate feet, move hands closer, full handstand push-up",
                alternatives: ["Decline Push-Ups", "Wall Handstand Hold"]
            }
        ],
        dumbbell: [
            {
                name: "Dumbbell Floor Press",
                difficulty: "beginner",
                sets: "3-4",
                reps: "8-12",
                rest: "90-120s",
                form_tips: "Lie on floor, retract shoulder blades, elbows 45°, full lockout",
                progression: "Increase weight gradually, add pause, single arm variation",
                alternatives: ["Dumbbell Bench Press", "Dumbbell Flyes"]
            },
            {
                name: "Dumbbell Press",
                difficulty: "intermediate",
                sets: "3-4",
                reps: "8-12",
                rest: "2min",
                form_tips: "Retract shoulders, chest up, 45° elbow angle, control descent",
                progression: "Increase weight, tempo training, alternating arms",
                alternatives: ["Floor Press", "Incline Dumbbell Press"]
            },
            {
                name: "Dumbbell Flyes",
                difficulty: "intermediate",
                sets: "3",
                reps: "10-15",
                rest: "90s",
                form_tips: "Slight elbow bend, wide arc motion, squeeze at top",
                progression: "Increase weight, slow tempo, single arm",
                alternatives: ["Cable Flyes", "Floor Flyes"]
            }
        ],
        calisthenics: [
            {
                name: "Dips (Using Chairs)",
                difficulty: "intermediate",
                sets: "3",
                reps: "8-15",
                rest: "90-120s",
                form_tips: "Lean slightly forward, elbows tucked, full depth, controlled",
                progression: "Add weight in backpack, single leg, negative reps",
                alternatives: ["Bench Dips", "Dip Push-Ups"]
            }
        ]
    },
    back: {
        bodyweight: [
            {
                name: "Pull-Ups (Doorframe/Bar)",
                difficulty: "intermediate",
                sets: "3-4",
                reps: "6-12",
                rest: "2-3min",
                form_tips: "Overhand grip, full hang, chin over bar, controlled descent",
                progression: "Add weight, slow tempo, typewriter pull-ups",
                alternatives: ["Chin-Ups", "Negative Pull-Ups", "Band-Assisted"]
            },
            {
                name: "Inverted Rows (Table/Door)",
                difficulty: "beginner",
                sets: "3-4",
                reps: "8-15",
                rest: "90s",
                form_tips: "Body straight, pull chest to bar, squeeze shoulder blades",
                progression: "Lower angle, elevate feet, add weight",
                alternatives: ["Bed Sheet Rows", "TRX Rows"]
            },
            {
                name: "Superman Holds",
                difficulty: "beginner",
                sets: "3",
                reps: "30-60s",
                rest: "60s",
                form_tips: "Lift chest and legs, squeeze glutes, hold position",
                progression: "Longer holds, add pulses, add weight",
                alternatives: ["Back Extensions", "Reverse Hypers"]
            }
        ],
        dumbbell: [
            {
                name: "Dumbbell Rows",
                difficulty: "intermediate",
                sets: "3-4",
                reps: "8-12",
                rest: "90s",
                form_tips: "Support on bench/chair, pull to hip, squeeze at top, control",
                progression: "Increase weight, slow tempo, pause at top",
                alternatives: ["Bent-Over Rows", "Chest-Supported Rows"]
            },
            {
                name: "Dumbbell Pullovers",
                difficulty: "intermediate",
                sets: "3",
                reps: "10-15",
                rest: "90s",
                form_tips: "Perpendicular to bench, stretch at bottom, pull with lats",
                progression: "Increase weight, floor variation, slow tempo",
                alternatives: ["Straight-Arm Pulldown", "Floor Pullovers"]
            },
            {
                name: "Renegade Rows",
                difficulty: "advanced",
                sets: "3",
                reps: "8-10/side",
                rest: "90s",
                form_tips: "Plank position, row without rotating, core engaged",
                progression: "Increase weight, add push-up between reps",
                alternatives: ["Single Arm Rows", "Plank Rows"]
            }
        ]
    },
    shoulders: {
        bodyweight: [
            {
                name: "Pike Push-Ups",
                difficulty: "intermediate",
                sets: "3",
                reps: "8-12",
                rest: "90s",
                form_tips: "Inverted V position, nose to floor, vertical press path",
                progression: "Elevate feet, deficit, full handstand push-up",
                alternatives: ["Wall Walks", "Handstand Hold"]
            },
            {
                name: "Wall Handstand Push-Ups",
                difficulty: "advanced",
                sets: "3",
                reps: "5-10",
                rest: "2-3min",
                form_tips: "Heels against wall, controlled descent, full lockout",
                progression: "Freestanding, deficit, negative reps",
                alternatives: ["Pike Push-Ups", "Elevated Pike Push-Ups"]
            }
        ],
        dumbbell: [
            {
                name: "Dumbbell Shoulder Press",
                difficulty: "intermediate",
                sets: "3-4",
                reps: "8-12",
                rest: "90-120s",
                form_tips: "Seated or standing, core tight, press straight up, full lockout",
                progression: "Increase weight, single arm, Arnold press",
                alternatives: ["Military Press", "Push Press"]
            },
            {
                name: "Lateral Raises",
                difficulty: "beginner",
                sets: "3",
                reps: "12-20",
                rest: "60s",
                form_tips: "Slight lean forward, raise to shoulder height, control descent",
                progression: "Increase weight, slow tempo, drop sets",
                alternatives: ["Cable Lateral Raise", "Band Lateral Raise"]
            },
            {
                name: "Front Raises",
                difficulty: "beginner",
                sets: "3",
                reps: "10-15",
                rest: "60s",
                form_tips: "Palms down, raise to eye level, no momentum",
                progression: "Increase weight, alternating arms, plate raises",
                alternatives: ["Band Front Raise", "Plate Front Raise"]
            },
            {
                name: "Bent-Over Rear Delt Flyes",
                difficulty: "intermediate",
                sets: "3",
                reps: "12-15",
                rest: "60s",
                form_tips: "Hinge at hips, slight elbow bend, raise to sides, pinkies up",
                progression: "Increase weight, seated variation, slow tempo",
                alternatives: ["Face Pulls", "Reverse Pec Deck"]
            }
        ]
    },
    legs: {
        bodyweight: [
            {
                name: "Bodyweight Squats",
                difficulty: "beginner",
                sets: "3-4",
                reps: "15-25",
                rest: "60-90s",
                form_tips: "Feet shoulder-width, knees track toes, depth to parallel",
                progression: "Pause squats, jump squats, pistol squat progression",
                alternatives: ["Goblet Squat", "Bulgarian Split Squat"]
            },
            {
                name: "Lunges",
                difficulty: "beginner",
                sets: "3",
                reps: "10-15/leg",
                rest: "60s",
                form_tips: "Step length appropriate, knee doesn't pass toes, upright torso",
                progression: "Walking lunges, reverse lunges, jump lunges",
                alternatives: ["Step-Ups", "Split Squats"]
            },
            {
                name: "Bulgarian Split Squats",
                difficulty: "intermediate",
                sets: "3",
                reps: "8-12/leg",
                rest: "90s",
                form_tips: "Rear foot elevated, front knee forward, 90% weight on front leg",
                progression: "Add weight, increase height, tempo training",
                alternatives: ["Lunges", "Step-Ups"]
            },
            {
                name: "Pistol Squats",
                difficulty: "advanced",
                sets: "3",
                reps: "5-10/leg",
                rest: "2min",
                form_tips: "Balance on one leg, extend other forward, squat deep",
                progression: "Weighted pistols, deficit pistols",
                alternatives: ["Bulgarian Split Squat", "Single-Leg Box Squat"]
            },
            {
                name: "Glute Bridges",
                difficulty: "beginner",
                sets: "3",
                reps: "15-20",
                rest: "60s",
                form_tips: "Feet close to glutes, thrust hips up, squeeze at top",
                progression: "Single-leg, elevated, add weight",
                alternatives: ["Hip Thrusts", "Single-Leg Glute Bridge"]
            },
            {
                name: "Nordic Curls",
                difficulty: "advanced",
                sets: "3",
                reps: "5-8",
                rest: "2min",
                form_tips: "Knees anchored, slow eccentric, use hands to catch",
                progression: "Less hand assistance, full range, weighted",
                alternatives: ["Slider Hamstring Curls", "Single-Leg Deadlift"]
            }
        ],
        dumbbell: [
            {
                name: "Goblet Squats",
                difficulty: "beginner",
                sets: "3-4",
                reps: "10-15",
                rest: "90s",
                form_tips: "Hold dumbbell at chest, elbows down, full depth",
                progression: "Increase weight, pause at bottom, heels elevated",
                alternatives: ["Bodyweight Squats", "Front Squats"]
            },
            {
                name: "Dumbbell Romanian Deadlift",
                difficulty: "intermediate",
                sets: "3-4",
                reps: "8-12",
                rest: "90s",
                form_tips: "Slight knee bend, hinge at hips, keep back straight",
                progression: "Increase weight, single-leg variation, deficit",
                alternatives: ["Barbell RDL", "Good Mornings"]
            },
            {
                name: "Dumbbell Lunges",
                difficulty: "intermediate",
                sets: "3",
                reps: "10-12/leg",
                rest: "90s",
                form_tips: "Dumbbells at sides, step and lower, knee tracks toe",
                progression: "Increase weight, walking lunges, deficit",
                alternatives: ["Bodyweight Lunges", "Bulgarian Split Squat"]
            },
            {
                name: "Single-Leg Calf Raises",
                difficulty: "intermediate",
                sets: "3",
                reps: "12-20/leg",
                rest: "60s",
                form_tips: "Hold dumbbell, full range, pause at top, control descent",
                progression: "Increase weight, deficit for stretch, slow tempo",
                alternatives: ["Double-Leg Calf Raises", "Seated Calf Raises"]
            }
        ]
    },
    arms: {
        bodyweight: [
            {
                name: "Diamond Push-Ups",
                difficulty: "intermediate",
                sets: "3",
                reps: "8-12",
                rest: "90s",
                form_tips: "Hands form diamond, elbows tucked, tricep focus",
                progression: "Elevate feet, add weight, slow tempo",
                alternatives: ["Close-Grip Push-Ups", "Bench Dips"]
            },
            {
                name: "Bench Dips",
                difficulty: "beginner",
                sets: "3",
                reps: "10-15",
                rest: "60s",
                form_tips: "Hands on bench, feet extended, lower until 90°",
                progression: "Elevate feet, add weight on lap, single leg",
                alternatives: ["Chair Dips", "Diamond Push-Ups"]
            },
            {
                name: "Chin-Ups",
                difficulty: "intermediate",
                sets: "3-4",
                reps: "6-12",
                rest: "2min",
                form_tips: "Underhand grip, full hang, pull to chin, squeeze biceps",
                progression: "Add weight, slow tempo, L-sit chin-ups",
                alternatives: ["Pull-Ups", "Inverted Rows"]
            }
        ],
        dumbbell: [
            {
                name: "Dumbbell Bicep Curls",
                difficulty: "beginner",
                sets: "3",
                reps: "10-15",
                rest: "60s",
                form_tips: "Elbows locked at sides, full range, no swinging",
                progression: "Increase weight, slow tempo, 21s",
                alternatives: ["Hammer Curls", "Concentration Curls"]
            },
            {
                name: "Hammer Curls",
                difficulty: "beginner",
                sets: "3",
                reps: "10-15",
                rest: "60s",
                form_tips: "Neutral grip, elbows locked, full range",
                progression: "Increase weight, cross-body variation, alternating",
                alternatives: ["Bicep Curls", "Reverse Curls"]
            },
            {
                name: "Overhead Tricep Extension",
                difficulty: "intermediate",
                sets: "3",
                reps: "10-15",
                rest: "60s",
                form_tips: "Elbows close to head, full stretch, controlled extension",
                progression: "Increase weight, single arm, slow tempo",
                alternatives: ["Lying Tricep Extension", "Kickbacks"]
            },
            {
                name: "Tricep Kickbacks",
                difficulty: "beginner",
                sets: "3",
                reps: "12-15",
                rest: "60s",
                form_tips: "Bend at hip, upper arm parallel to floor, extend fully",
                progression: "Increase weight, pause at top, both arms",
                alternatives: ["Overhead Extension", "Close-Grip Press"]
            }
        ]
    },
    core: {
        bodyweight: [
            {
                name: "Plank",
                difficulty: "beginner",
                sets: "3",
                reps: "30-60s",
                rest: "60s",
                form_tips: "Forearms down, body straight, squeeze glutes and core",
                progression: "Longer holds, single arm/leg, moving plank",
                alternatives: ["RKC Plank", "Side Plank"]
            },
            {
                name: "Mountain Climbers",
                difficulty: "intermediate",
                sets: "3",
                reps: "20-30",
                rest: "60s",
                form_tips: "Plank position, drive knees to chest, maintain core tension",
                progression: "Faster tempo, cross-body, slider variation",
                alternatives: ["Running in Place", "High Knees"]
            },
            {
                name: "Hanging Leg Raises",
                difficulty: "advanced",
                sets: "3",
                reps: "8-15",
                rest: "90s",
                form_tips: "Hang from bar, control swing, raise legs to 90°",
                progression: "Toes to bar, L-sit hold, weighted",
                alternatives: ["Lying Leg Raises", "Knee Raises"]
            },
            {
                name: "V-Ups",
                difficulty: "intermediate",
                sets: "3",
                reps: "10-15",
                rest: "60s",
                form_tips: "Simultaneous arms and legs, touch toes, control descent",
                progression: "Slower tempo, weighted, hold at top",
                alternatives: ["Crunches", "Bicycle Crunches"]
            },
            {
                name: "Russian Twists",
                difficulty: "intermediate",
                sets: "3",
                reps: "20-30",
                rest: "60s",
                form_tips: "Lean back slightly, rotate torso, touch floor each side",
                progression: "Hold weight, feet elevated, slower tempo",
                alternatives: ["Bicycle Crunches", "Side Plank"]
            },
            {
                name: "Dead Bug",
                difficulty: "beginner",
                sets: "3",
                reps: "10-15/side",
                rest: "60s",
                form_tips: "Back flat on floor, opposite arm and leg extend, core engaged",
                progression: "Add weight, slower tempo, hold position",
                alternatives: ["Bird Dog", "Hollow Body Hold"]
            }
        ]
    }
};

// Global Variables
let currentDay = 'monday';
let selectedDuration = 30;

// DOM Elements
const calendarGrid = document.getElementById('calendarGrid');
const workoutContent = document.getElementById('workoutContent');
const todayWorkoutTitle = document.getElementById('todayWorkoutTitle');
const todayWorkoutFocus = document.getElementById('todayWorkoutFocus');
const currentDayHeader = document.getElementById('currentDayHeader');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    detectCurrentDay();
    createWeeklyCalendar();
    setupEventListeners();
    displayWorkout(currentDay, selectedDuration);
});

// Detect current day
function detectCurrentDay() {
    const today = new Date();
    const dayIndex = today.getDay();
    currentDay = dayNames[dayIndex];
    
    const workout = weeklyWorkouts[currentDay];
    if (workout) {
        currentDayHeader.textContent = `Today is ${capitalizeFirst(currentDay)} • ${workout.name}`;
    }
}

// Create weekly calendar
function createWeeklyCalendar() {
    const days = [
        { key: 'monday', name: 'MON' },
        { key: 'tuesday', name: 'TUE' },
        { key: 'wednesday', name: 'WED' },
        { key: 'thursday', name: 'THU' },
        { key: 'friday', name: 'FRI' },
        { key: 'saturday', name: 'SAT' },
        { key: 'sunday', name: 'SUN' }
    ];
    
    calendarGrid.innerHTML = days.map(day => {
        const workout = weeklyWorkouts[day.key];
        const isActive = day.key === currentDay;
        const isRest = day.key === 'sunday';
        
        return `
            <div class="day-item ${isActive ? 'active' : ''} ${isRest ? 'rest-day' : ''}" data-day="${day.key}">
                <div class="day-name">${day.name}</div>
                <div class="day-workout">${workout.name}</div>
            </div>
        `;
    }).join('');
}

function setupEventListeners() {
    // Calendar day selection
    document.querySelectorAll('.day-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const day = e.currentTarget.dataset.day;
            selectDay(day);
        });
    });
    
    // Duration selection
    document.querySelectorAll('.duration-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            selectedDuration = parseInt(e.currentTarget.dataset.duration);
            displayWorkout(currentDay, selectedDuration);
        });
    });
}

// Select a specific day
function selectDay(day) {
    currentDay = day;
    
    // Update calendar UI
    document.querySelectorAll('.day-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.day === day) {
            item.classList.add('active');
        }
    });
    
    // Display workout for selected day
    displayWorkout(day, selectedDuration);
    
    // Scroll to workout
    document.getElementById('workoutDisplay').scrollIntoView({ behavior: 'smooth' });
}

// Display workout for a specific day
function displayWorkout(day, duration) {
    const workout = weeklyWorkouts[day];
    
    if (!workout) return;
    
    // Update hero section
    todayWorkoutTitle.textContent = workout.name;
    todayWorkoutFocus.textContent = workout.focus;
    
    // Handle rest day
    if (day === 'sunday') {
        workoutContent.innerHTML = `
            <div class="rest-day-message">
                <h3>🛌 ${workout.name}</h3>
                <p>${workout.message}</p>
            </div>
        `;
        return;
    }
    
    // Filter exercises based on duration
    let exercises = [...workout.exercises];
    let durationInfo = '';
    
    if (duration === 15) {
        exercises = exercises.slice(0, 4);
        durationInfo = '<p><strong>15-Minute Quick Workout:</strong> 4 key compound exercises with rest-pause or circuit style</p>';
    } else if (duration === 30) {
        exercises = exercises.slice(0, 6);
        durationInfo = '<p><strong>30-Minute Balanced Workout:</strong> Complete with shorter rest periods or supersets</p>';
    } else {
        durationInfo = '<p><strong>60-Minute Full Workout:</strong> Complete all exercises with full rest periods, warm-up, and cool-down</p>';
    }
    
    // Generate workout HTML
    const workoutHTML = `
        <div class="workout-content">
            <div class="warm-up-section">
                <h4>🔥 Warm-Up Protocol</h4>
                <p>5 minutes dynamic stretching • Arm circles, leg swings, torso twists • Light cardio (jumping jacks or march in place)</p>
                ${durationInfo}
            </div>
            
            <div class="exercise-list">
                ${exercises.map((exercise, index) => createExerciseCard(exercise, index + 1)).join('')}
            </div>
            
            <div class="cool-down-section">
                <h4>❄️ Cool-Down & Stretching</h4>
                <p>5-10 minutes of static stretching targeting muscles worked today • Hold each stretch for 20-30 seconds • Focus on deep breathing</p>
            </div>
        </div>
    `;
    
    workoutContent.innerHTML = workoutHTML;
    
    // Setup checkbox listeners
    setupExerciseCheckboxes();
}

// Create exercise card HTML
function createExerciseCard(exercise, number) {
    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(exercise.name + ' exercise tutorial')}`;
    
    return `
        <div class="exercise-card">
            <div class="exercise-header">
                <div class="exercise-title">
                    <span class="exercise-number">${number}</span>
                    <div>
                        <input type="checkbox" class="exercise-checkbox" data-exercise="${number}">
                        <span class="exercise-name">${exercise.name}</span>
                    </div>
                </div>
            </div>
            
            <div class="exercise-meta">
                <span><strong>Sets:</strong> ${exercise.sets}</span>
                <span><strong>Reps:</strong> ${exercise.reps}</span>
                <span><strong>Rest:</strong> ${exercise.rest}</span>
                <span><strong>Target:</strong> ${exercise.target}</span>
            </div>
            
            <div class="exercise-tips">
                <strong>🎯 Form Tips:</strong>
                <p>${exercise.form_tips}</p>
            </div>
            
            <a href="${youtubeUrl}" target="_blank" class="youtube-link">
                🎥 Watch Tutorial
            </a>
        </div>
    `;
}



// Setup exercise checkboxes
function setupExerciseCheckboxes() {
    document.querySelectorAll('.exercise-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const card = e.target.closest('.exercise-card');
            const exerciseName = card.querySelector('.exercise-name');
            
            if (e.target.checked) {
                exerciseName.classList.add('exercise-completed');
            } else {
                exerciseName.classList.remove('exercise-completed');
            }
        });
    });
}

// Utility function
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
