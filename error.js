setTimeout(() => {
    throw new Error('ooops')
}, 300)


process.on('unhandledRejection', () => {

})


process.on('uncaughtException', () => {
    
})