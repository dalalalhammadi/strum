import React from "react";
import { AuthButtonStyled } from "../../styles";
import { useState } from "react";
import SignupModal from "../models/SignupModal";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <AuthButtonStyled onClick={openModal}></AuthButtonStyled>;
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
