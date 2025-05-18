import React from "react";
import { Modal, Box } from "@mui/material";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = ({ open, onClose, type, setType }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(6px)",
        },
      }}
    >
      <>
        {type === "login" && (
          <Box
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md mx-auto mt-36 p-8 rounded-xl shadow-2xl text-white border border-white/10 bg-black/80 login-box"
          >
            <LoginForm
              onClose={onClose}
              switchToRegister={() => setType("register")}
            />
          </Box>
        )}

        {type === "register" && (
          <Box
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl mx-auto mt-8 p-8 rounded-xl shadow-2xl text-white border border-white/10 bg-black/80 register-box"
          >
            <RegisterForm
              onClose={onClose}
              switchToLogin={() => setType("login")}
            />
          </Box>
        )}
      </>
    </Modal>
  );
};


export default AuthModal;
