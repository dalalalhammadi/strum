import { useState } from "react";
import { UpdatedButtonStyled } from "../../styles";
import UkuleleModal from "../models/UkuleleModal";

const UpdateButton = ({ ukulele }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdatedButtonStyled onClick={openModal}>Update</UpdatedButtonStyled>
      <UkuleleModal
        oldUkulele={ukulele}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default UpdateButton;
