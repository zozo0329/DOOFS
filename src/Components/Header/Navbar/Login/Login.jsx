import React, { useState, useCallback } from "react";

// Constants for localStorage key and default form state
const LOGIN_STORAGE_KEY = "loginData";
const DEFAULT_FORM_STATE = {
  email: "",
  password: "",
  remember: false,
};

// Helper function to safely parse JSON with error handling
const safelyParseJSON = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Failed to parse JSON from localStorage:", error);
    return null;
  }
};

// Helper function to validate form data structure
const validateFormData = (data) => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const hasValidEmail = typeof data.email === "string";
  const hasValidPassword = typeof data.password === "string";
  const hasValidRemember = typeof data.remember === "boolean";

  return hasValidEmail && hasValidPassword && hasValidRemember;
};

// Helper function to load saved form data from localStorage
const loadSavedFormData = () => {
  const saved = localStorage.getItem(LOGIN_STORAGE_KEY);

  if (!saved) {
    return DEFAULT_FORM_STATE;
  }

  const parsedData = safelyParseJSON(saved);

  // Validate the parsed data before using it
  if (parsedData && validateFormData(parsedData)) {
    return parsedData;
  } else {
    // Clear invalid data from localStorage
    localStorage.removeItem(LOGIN_STORAGE_KEY);
    console.warn("Invalid login data found in localStorage, cleared.");
    return DEFAULT_FORM_STATE;
  }
};

const Login = () => {
  // Use lazy initializer to load saved data only once during initial render
  const [form, setForm] = useState(loadSavedFormData);

  const changeHandler = useCallback((e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();

      if (!form.email || !form.password) {
        alert("Please fill in all fields");
        return;
      }

      console.log("Login Data:", form);

      // Save if "remember me" is checked
      if (form.remember) {
        localStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(form));
      } else {
        localStorage.removeItem(LOGIN_STORAGE_KEY);
      }

      // TODO: connect to backend auth
    },
    [form],
  );

  const forgotPasswordHandler = useCallback(() => {
    alert("Redirect to forgot password page");
    // Example:
    // navigate("/forgot-password");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white p-6 rounded-2xl shadow-md w-[320px]"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {/* Email */}
        <div className="mb-3">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={changeHandler}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Enter your password"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-3">
          <button
            type="button"
            onClick={forgotPasswordHandler}
            className="text-sm text-lime-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Remember Me */}
        <div className="flex items-center mb-4 gap-2">
          <input
            type="checkbox"
            name="remember"
            checked={form.remember}
            onChange={changeHandler}
            className="cursor-pointer"
          />
          <label className="text-sm">Stay logged in</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-lime-500 hover:bg-lime-600 text-white p-2 rounded-lg transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
