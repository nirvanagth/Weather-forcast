console.log('Starting app')

setTimeout(() => {
    console.log('Inside of callback')
}, 2000)

setTimeout(() => {
    console.log('no delay')
}, 0)

console.log('Finishing up')



// Starting app
// Finishing up
// no delay
// Inside of callback
