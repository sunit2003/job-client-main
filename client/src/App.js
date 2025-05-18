import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Info2 from "./components/Info2.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import AuthModal from "./components/AuthModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState("login");

  return (
    <UserContextProvider>
      <div className="App">
        <ToastContainer position="top-right" />
        <Header
          onLoginClick={() => {
            setAuthModalOpen(true);
            setAuthModalType("login");
          }}
          onRegisterClick={() => {
            setAuthModalOpen(true);
            setAuthModalType("register");
          }}
        />
        <AuthModal
          open={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          type={authModalType}
          setType={setAuthModalType}
        />
        <Info2 />
      </div>
    </UserContextProvider>
  );
}

export default App;
