import { useState } from "react";
import { PageHome, PageHeaderSettings, BgModeGrad } from "./constants.jsx";
import "./header.css";
import catLogo from "./assets/cat.svg";

export const Header = ({ setPage, headerSettings, searchFn }) => {
  const s = headerSettings;
  const [searchInput, setSearchInput] = useState("");
  return (
    <header
      style={{
        background:
          s.bgMode === BgModeGrad
            ? `linear-gradient(${s.gradDegrees}deg, ${s.gradColor1} 0%, ${s.gradColor2} 50%, ${s.gradColor3} 100%)`
            : s.fillColor,
        boxShadow: s.showShadow ? "rgba(0, 0, 0, 0.3) 0px 10px 10px" : null,
      }}
    >
      <div className="page-title" onClick={() => setPage(PageHome)}>
        <img src={catLogo} />
        <h1> CatNapApp </h1>
      </div>
      <div className="action-buttons">
        <button onClick={() => setPage(PageHeaderSettings)}>
          Einstellungen
        </button>
        {s.showSearch && (
          <div className="search-box">
            <input
              type="search"
              placeholder="Suchbegriff"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              onClick={() => {
                searchFn(searchInput);
                setSearchInput("");
              }}
            >
              Suchen
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
