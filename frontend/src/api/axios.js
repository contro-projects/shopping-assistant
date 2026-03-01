import axios from "axios";

// If VITE_BACKEND_URL is set, API calls go directly to that backend.
// Otherwise falls back to "/api" (works with Vite proxy in local dev).
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
    ? `${import.meta.env.VITE_BACKEND_URL}/api`
    : "/api",
  withCredentials: true, // send cookies (access/refresh tokens)
});

export default api;
