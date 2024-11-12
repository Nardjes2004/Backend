// Authentication Middleware
const auth = (req, res, next) => {
    const authToken = req.headers['authorization'];

    if (authToken) {
        // Normally, you'd verify the token here (e.g., using JWT)
        console.log('Authentication successful');
        next(); // Pass control to the next middleware function
    } else {
        res.status(401).send('Unauthorized');
    }
}

export default auth
// module.exports = authenticate
//Authentication Middleware:
//This middleware checks for an authorization header in the request.
//If present, it logs a success message and calls next().
//If the header is missing, it responds with a 401 Unauthorized status.