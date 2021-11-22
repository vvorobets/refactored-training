import React, { ReactChild } from "react";
import { Button } from "../button";

import "./style.scss";

interface Props {
  handleClose: () => void;
  children: ReactChild;
}

export const Modal = ({ handleClose, children }: Props) => {
  return (
    <div className="modal-background" onClick={handleClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        {children}
        <Button handleClick={handleClose} label="Close" />
      </div>
    </div>
  );
};
