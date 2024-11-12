import { Router } from "express";

export default () => {
    let router = Router()

    // Un ensemble de fonction/ endpoint / actions defined by a URL and a method
    router.get('/', (req, res) => {
        // Manipulating DB
        // Fetching data
        res.send('Hello World !')
    })

    router.get('/second_endpoint', (req, res) => {
        res.send('Second Endpoint')
    })

    return router
}