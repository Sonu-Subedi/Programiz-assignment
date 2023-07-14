import React from "react";
const Header = ({ keywords, deleteKeywords, clearAll }) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}

              <button onClick={() => deleteKeywords(key)}>
                <img
                  src={process.env.PUBLIC_URL + "/images/remove.svg"}
                  alt=""
                />
              </button>
            </li>
          );
        })}
        <a href="#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul>
    </div>
  );
};

export default Header;
