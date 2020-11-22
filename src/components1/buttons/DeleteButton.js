import React from "react";
import { DeleteButtonStyled } from "../../styles";
import ukuleleStore from "../../stores/ukuleleStore";

const DeleteButton = ({ ukuleleId }) => {
  return (
    <DeleteButtonStyled onClick={() => ukuleleStore.deleteUkulele(ukuleleId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
