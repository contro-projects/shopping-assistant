import axios from "axios";

// If VITE_BACKEND_URL is set, API calls go directly to that backend.
// Otherwise falls back to "/api" (works with Vite proxy in local dev).
const backendUrl = import.meta.env.VITE_BACKEND_URL?.replace(/\/+$/, ""); // strip trailing slashes
const api = axios.create({
  baseURL: backendUrl ? `${backendUrl}/api` : "/api",
  withCredentials: true, // send cookies (access/refresh tokens)
});

export default api;
