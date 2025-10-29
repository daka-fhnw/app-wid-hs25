import { pageHome, pageHeaderSettings, bgModeGrad } from "./constants.jsx";
import "./header.css";
import catLogo from "./assets/cat.svg";

export const Header = ({ setPage, headerSettings, searchFn }) => {
  const s = headerSettings;
  const handleSubmit = (e) => {
    searchFn(e.target.search.value);
    e.preventDefault();
  };
  return (
    <header
      style={{
        background:
          s.bgMode === bgModeGrad
            ? `linear-gradient(${s.gradDegrees}deg, ${s.gradColor1} 0%, ${s.gradColor2} 50%, ${s.gradColor3} 100%)`
            : s.fillColor,
        boxShadow: s.showShadow ? "rgba(0, 0, 0, 0.3) 0px 10px 10px" : null,
      }}
    >
      <div className="page-title" onClick={() => setPage(pageHome)}>
        <img src={catLogo} />
        <h1> CatNapApp </h1>
      </div>
      <div className="action-buttons">
        <button onClick={() => setPage(pageHeaderSettings)}>
          Einstellungen
        </button>
        {s.showSearch && (
          <div className="search-box">
            <form onSubmit={handleSubmit}>
              <input type="search" name="search" placeholder="Suchbegriff" />
              <button type="submit">Suchen</button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};
