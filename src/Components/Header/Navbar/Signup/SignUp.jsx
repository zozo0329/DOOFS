import React, { useState, useCallback } from "react";
import { signUp } from "../../../../Other/Store/Firebase/firebase-auth";
import { saveUserToDatabase } from "../../../../Other/Store/Firebase/firebase-database";
const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const submitHandler = useCallback(
    async (e) => {
      e.preventDefault();

      if (!form.email || !form.password || !form.confirmPassword) {
        return;
      }

      if (form.password !== form.confirmPassword) {
        return;
      }

      // Call the signUp function from firebase-auth
      const { user, error } = await signUp(form.email, form.password);

      // Check for error FIRST before accessing user properties
      if (error) {
        console.log(error);
        return;
      }

      // Save user data to Realtime Database
      console.log("Calling saveUserToDatabase with user:", user);

      const dbResult = await saveUserToDatabase(user);
      console.log("Database save result:", dbResult);

      if (!dbResult.success) {
        alert("Failed to save user data: " + dbResult.error);
        return;
      }
      console.log("Sign Up successful:", user);
      alert("Sign Up successful!");

      // Reset the form after successful sign-up
      setForm({
        email: "",
        password: "",
        confirmPassword: "",
      });
    },
    [form],
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white p-6 rounded-2xl shadow-md w-[320px]"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

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
        <div className="mb-3">
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

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={changeHandler}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Confirm your password"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-lime-500 hover:bg-lime-600 text-white p-2 rounded-lg transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
