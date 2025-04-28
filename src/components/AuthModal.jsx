import React from "react";
import { Modal, Box } from "@mui/material";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = ({ open, onClose, type }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="p-5 bg-white rounded-md w-96 mx-auto mt-20">
        {type === "login" ? <LoginForm /> : <RegisterForm />}
      </Box>
    </Modal>
  );
};

export default AuthModal;
