const logger = (req, res, next) => {
    console.log(`MIDDLEWARE 1 : method: ${req.method} URL: ${req.url}`)
    next()
    // if (req.method === 'GET') {
    //     next()
    // } else {
    //     res.send("You are not allowed to use other than GET§")
    // }
}

export default logger

//Consumer send req ===> Middleware 1 : next() ===> Middleware 2 : next () ===> ENDPOINT