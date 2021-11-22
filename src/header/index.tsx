import React from "react";

import "./style.scss";

interface Props {
  competencies: string[];
  search: string;
  handleSearch: (value: string) => void;
}

export const Header = ({ competencies, search, handleSearch }: Props) => {
  return (
    <div className="header">
      <div className="header__nav-item header__nav-item--dropdown">
        Competencies
        <div className="header__dropdown">
          <ul className="header__list">
            {competencies.map((item) => (
              <li
                className="header__list-item"
                onClick={() => handleSearch(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="header__nav-item header__nav-item--dropdown">
        Search
        <div className="header__dropdown header__dropdown--align-right">
          <input
            className="header__input header__input--search"
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
