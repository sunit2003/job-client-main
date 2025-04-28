import React, { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Details:", { name, email, password });
    // Add registration logic here (API call, validation, etc.)
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium">Contact Number</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            pattern="[0-9]{10}"
            maxLength={10}
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded mt-3 hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
