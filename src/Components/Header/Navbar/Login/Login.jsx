import React, { useState, useCallback } from "react";
import { signIn } from "../../../../Other/Store/Firebase/firebase-auth";

const LOGIN_STORAGE_KEY = "loginData";
const DEFAULT_FORM_STATE = {
  email: "",
  password: "",
  remember: false,
};

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const changeHandler = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setError(""); // Clear error when user types

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const submitHandler = useCallback(
    async (e) => {
      e.preventDefault();

      if (!form.email || !form.password) {
        setError("Please fill in all fields");
        return;
      }

      setIsLoading(true);
      setError("");

      try {
        // Use async/await for cleaner code
        const { user, error: signInError } = await signIn(
          form.email,
          form.password,
        );

        if (signInError) {
          setError(signInError);
          return;
        }

        console.log("Login successful:", user);

        // Save if "remember me" is checked
        if (form.remember) {
          localStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(form));
        } else {
          localStorage.removeItem(LOGIN_STORAGE_KEY);
        }
      } catch (err) {
        setError("An unexpected error occurred. Please try again.");
        console.error("Login error:", err);
      } finally {
        setIsLoading(false);
      }
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

        {/* Error Message */}
        {error && (
          <div className="mb-3 p-2 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

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
            disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-3">
          <button
            type="button"
            onClick={forgotPasswordHandler}
            className="text-sm text-lime-600 hover:underline disabled:opacity-50"
            disabled={isLoading}
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
            disabled={isLoading}
          />
          <label className="text-sm">Stay logged in</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-lime-500 hover:bg-lime-600 text-white p-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
