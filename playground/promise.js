var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey, it worked')
        reject('Unable to fulfill promise')
    }, 2500)

})

somePromise.then((message) => {//only worked if promise get fulfilled
    console.log('Success', message)
}, (errorMessage) => {
    console.log('Error', errorMessage)
})
