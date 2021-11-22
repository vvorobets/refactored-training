import React from "react";

import "./style.scss";

interface Props {
  label: string;
  handleClick: () => any;
}

export const Button = ({ label, handleClick }: Props) => (
  <button className="button" onClick={handleClick}>
    {label}
  </button>
);
