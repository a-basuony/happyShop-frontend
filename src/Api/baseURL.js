// import axios from "axios";

// const baseUrl = axios.create({
//   baseURL:
//     "https://backend-e-commerce-mj4g44aqv-ahmed-basuonys-projects.vercel.app/",
// });

// export default baseUrl;

import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://backend-e-commerce-amber.vercel.app",
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ✅ إضافة Interceptor لضمان إرسال التوكن لو موجود في الـ LocalStorage
baseUrl.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// ✅ Global Error Handler Interceptor
baseUrl.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      // Optional: Auto-logout context could be triggered here if we had access to the store
      // For now, we can clear storage if token is invalid, but let's be careful not to break valid sessions on transient errors
      // localStorage.removeItem("token");
      // localStorage.removeItem("user");
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default baseUrl;
