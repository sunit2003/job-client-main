// import React, { useState } from "react";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

// const LoginForm = ({ onClose, switchToRegister }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Details:", { email, password, rememberMe });
//   };

//   return (
//     <div onClick={(e) => e.stopPropagation()} className="">
//       <h2 className="text-3xl font-bold text-center mb-6 tracking-wide text-[#FFDE4D]">
//         Welcome Back
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div>
//           <label className="block text-sm text-gray-300 mb-1">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="abc@example.com..."
//             className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
//           />
//         </div>
//         <div>
//           <label className="block text-sm text-gray-300 mb-1">Password</label>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="Password..."
//               className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
//             />
//             <span
//               className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? (
//                 <EyeSlashIcon className="h-5 w-5" />
//               ) : (
//                 <EyeIcon className="h-5 w-5" />
//               )}
//             </span>
//           </div>
//         </div>

//         {/* Remember Me */}
//         <div className="flex items-center justify-between text-sm text-gray-300">
//           <label className="inline-flex items-center gap-2 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={(e) => setRememberMe(e.target.checked)}
//               className="accent-[#FFDE4D] w-5 h-5 rounded-md border border-gray-400 bg-black focus:ring-2 focus:ring-[#FFDE4D] mt-1"
//             />
//             <span className="select-none ">Remember me</span>
//           </label>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-[#FFDE4D] text-black font-semibold py-2 rounded-md hover:brightness-110 transition duration-300"
//         >
//           Login
//         </button>
//       </form>

//       <p className="text-center text-gray-400 text-xs mt-6">
//         Don't have an account?{" "}
//         <span
//           className="text-[#FFDE4D] cursor-pointer hover:underline"
//           onClick={switchToRegister}
//         >
//           Register
//         </span>
//       </p>
//     </div>
//   );
// };

// export default LoginForm;
// src/components/LoginForm.jsx
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const LoginForm = ({ onClose, switchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Look for saved user in sessionStorage first,
    // fall back to localStorage if “remember me” was used:
    const stored =
      JSON.parse(sessionStorage.getItem("fakeUser")) ||
      JSON.parse(localStorage.getItem("fakeUser"));

    if (stored && stored.email === email && stored.password === password) {
      // mark logged in
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("loggedInUser", stored.name);

      // optionally “remember” across sessions
      if (rememberMe) {
        localStorage.setItem("fakeUser", JSON.stringify(stored));
      }

      toast.success("Login successful!");
      onClose();
      window.location.reload(); // so header picks it up
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <h2 className="text-3xl font-bold text-center mb-6 tracking-wide text-[#FFDE4D]">
        Welcome Back
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="abc@example.com..."
          />
        </div>

        {/* Password with toggle */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Password</label>
          <div className="relative">
            <input
              className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password..."
            />
            <span
              className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </span>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center text-sm text-gray-300">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-[#FFDE4D] w-5 h-5 rounded border-gray-400 bg-black focus:ring-2 focus:ring-[#FFDE4D]"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#FFDE4D] text-black font-semibold py-2 rounded-md hover:brightness-110 transition duration-300"
        >
          Login
        </button>
      </form>

      <p className="text-center text-gray-400 text-xs mt-6">
        Don't have an account?{" "}
        <span
          className="text-[#FFDE4D] cursor-pointer hover:underline"
          onClick={switchToRegister}
        >
          Register
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
