import React from "react";
import { Button } from "../button";

import "./style.scss";

interface Props {
  competencies: string[];
  search: string;
  handleSearch: (value: string) => void;
}

export const Header = ({ competencies, search, handleSearch }: Props) => {
  return (
    <div className="header">
      <div className="header__top">
        <input
          className="header__input header__input--search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button label="Reset" handleClick={() => handleSearch("")} />
      </div>
      <ul className="header__navbar">
        <li
          className={`header__navbar-item ${
            search ? "" : "header__navbar-item--active"
          }`}
          onClick={() => handleSearch("")}
        >
          All
        </li>
        {competencies.map((item) => (
          <li
            className={`header__navbar-item ${
              search === item ? "header__navbar-item--active" : ""
            }`}
            onClick={() => handleSearch(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
