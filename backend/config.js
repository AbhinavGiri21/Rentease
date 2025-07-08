const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

module.exports = {
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET,
    stripeSecret: process.env.STRIPE_SECRET_KEY,
    frontendUrl: FRONTEND_URL,
    allowedOrigins: [
        "http://localhost:3000",
        "https://rentease-1-rxvx.onrender.com",
    ],
};