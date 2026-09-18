//Create a stopwatch object that has four properties and three methods
const stopwatch = {}
stopwatch.shape = 'Round'
stopwatch.color = 'Black'
stopwatch.material = 'Plastic'
stopwatch.condition = 'New'

stopwatch.start = () => {
    console.log('start')
}

stopwatch.end = () => {
    console.log('end')
}

stopwatch.selfdestruct = () => {
    console.log(`This ${stopwatch.material} watch has exploded!`)
}

console.log(stopwatch)
console.log(stopwatch.shape)