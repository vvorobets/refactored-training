import React from "react";

import "./style.scss";

interface Props {
  label: string;
  handleClick: () => any;
}

export const Button = ({
  label,
  handleClick,
  ...rest
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className="button" onClick={handleClick} {...rest}>
    {label}
  </button>
);
