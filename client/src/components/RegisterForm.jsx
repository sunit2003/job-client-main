// import React, { useState } from "react";

// const RegisterForm = ({ onClose, switchToLogin }) => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     contact: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [agreed, setAgreed] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!agreed) {
//       alert("You must agree to the Terms and Conditions.");
//       return;
//     }
//     console.log("Registration Details:", form);
//   };

//   return (
//     <div onClick={(e) => e.stopPropagation()}>
//       <h2 className="text-3xl font-bold text-center mb-6 tracking-wide text-[#FFDE4D]">
//         Create Account
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div className="flex gap-4">
//           <div className="w-1/2">
//             <label className="block text-sm text-gray-300 mb-1">
//               First Name
//             </label>
//             <input
//               type="text"
//               name="firstName"
//               value={form.firstName}
//               onChange={handleChange}
//               required
//               placeholder="First Name..."
//               className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
//             />
//           </div>
//           <div className="w-1/2">
//             <label className="block text-sm text-gray-300 mb-1">
//               Last Name
//             </label>
//             <input
//               type="text"
//               name="lastName"
//               value={form.lastName}
//               onChange={handleChange}
//               required
//               placeholder="Last Name..."
//               className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm text-gray-300 mb-1">
//             Contact Number
//           </label>
//           <input
//             type="tel"
//             name="contact"
//             value={form.contact}
//             onChange={handleChange}
//             required
//             pattern="[0-9]{10}"
//             maxLength={10}
//             placeholder="9898-XXXX-XX"
//             className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
//           />
//         </div>

//         <div>
//           <label className="block text-sm text-gray-300 mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             placeholder="abc@example.com"
//             className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
//           />
//         </div>

//         <div>
//           <label className="block text-sm text-gray-300 mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             placeholder="Password..."
//             className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
//           />
//         </div>

//         <div>
//           <label className="block text-sm text-gray-300 mb-1">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             required
//             placeholder="Re-type Password..."
//             className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
//           />
//         </div>

//         <div className="flex items-start gap-3 mt-2">
//           <input
//             id="terms"
//             type="checkbox"
//             checked={agreed}
//             onChange={(e) => setAgreed(e.target.checked)}
//             className="accent-[#FFDE4D] w-5 h-5 rounded-md border border-gray-400 bg-black focus:ring-2 focus:ring-[#FFDE4D] mt-1"
//           />
//           <label htmlFor="terms" className="text-sm text-gray-300">
//             I agree to the{" "}
//             <a href="#" className="text-[#FFDE4D] hover:underline transition">
//               Terms & Conditions
//             </a>
//           </label>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-[#FFDE4D] text-black font-semibold py-2 rounded-md hover:brightness-110 transition duration-300"
//         >
//           Register
//         </button>
//       </form>

//       <p className="text-center text-gray-400 text-xs mt-6">
//         Already have an account?{" "}
//         <span
//           className="text-[#FFDE4D] cursor-pointer hover:underline"
//           onClick={switchToLogin}
//         >
//           Login
//         </span>
//       </p>
//     </div>
//   );
// };

// export default RegisterForm;
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const RegisterForm = ({ onClose, switchToLogin }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("You must agree to the Terms and Conditions.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Simulated fake register (remove if you connect to real backend)
    const fakeUser = {
      name: `${form.firstName} ${form.lastName}`,
      contact: form.contact,
      email: form.email,
      password: form.password,
    };
    sessionStorage.setItem("fakeUser", JSON.stringify(fakeUser));
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("loggedInUser", fakeUser.name);

    toast.success("Registration successful!");
    onClose();
    window.location.reload();
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <h2 className="text-3xl font-bold text-center mb-6 tracking-wide text-[#FFDE4D]">
        Create Account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm text-gray-300 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              placeholder="First Name..."
              className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm text-gray-300 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              placeholder="Last Name..."
              className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Contact Number
          </label>
          <input
            type="tel"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="9898-XXXX-XX"
            className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="abc@example.com"
            className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Password..."
              className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
            />
            <span
              className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Re-type Password..."
              className="w-full bg-black/70 border border-gray-600 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#FFDE4D]"
            />
            <span
              className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 mt-2">
          <input
            id="terms"
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="accent-[#FFDE4D] w-5 h-5 rounded-md border border-gray-400 bg-black focus:ring-2 focus:ring-[#FFDE4D] mt-1"
          />
          <label htmlFor="terms" className="text-sm text-gray-300">
            I agree to the{" "}
            <a href="#" className="text-[#FFDE4D] hover:underline transition">
              Terms & Conditions
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FFDE4D] text-black font-semibold py-2 rounded-md hover:brightness-110 transition duration-300"
        >
          Register
        </button>
      </form>

      <p className="text-center text-gray-400 text-xs mt-6">
        Already have an account?{" "}
        <span
          className="text-[#FFDE4D] cursor-pointer hover:underline"
          onClick={switchToLogin}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
