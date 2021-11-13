let reps;
let serializedReps = localStorage.getItem('reps')
if(serializedReps === null) {
    reps = []
} else {
    reps = JSON.parse(serializedReps)
}
let newNumberOfReps = window.prompt('Enter your numbers of reps: ')
reps.push(newNumberOfReps)
renderChart(reps)
serializedReps = JSON.stringify(reps)
localStorage.setItem('reps', serializedReps)

