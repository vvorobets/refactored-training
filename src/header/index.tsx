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
          <ul>
            {competencies.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="header__nav-item header__nav-item--dropdown">
        Search
        <div className="header__dropdown">
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
