import "./App.css";
import { useState } from "react";
import { Header } from "./Header.jsx";
import { MainArea } from "./MainArea.jsx";
import { BgModeGrad, PageHome, PageSearchResult } from "./constants.jsx";
import { createDefaultHeaderSettings } from "./utilities.jsx";

function App() {
  const [page, setPage] = useState(PageHome);
  const [search, setSearch] = useState("");
  const [headerSettings, setHeaderSettings] = useState(
    createDefaultHeaderSettings()
  );
  const searchFn = (value) => {
    setSearch(value);
    setPage(PageSearchResult);
  };
  return (
    <>
      <Header
        setPage={setPage}
        headerSettings={headerSettings}
        searchFn={searchFn}
      />
      <MainArea
        page={page}
        search={search}
        headerSettings={headerSettings}
        setHeaderSettings={setHeaderSettings}
      />
    </>
  );
}

export default App;
