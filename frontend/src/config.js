const isProduction = process.env.NODE_ENV === "production";

export const API_BASE_URL = isProduction
    ? "https://your-backend.onrender.com"
    : "http://localhost:5000";