import "./App.css";
import { useEffect, useState } from "react";
import { Header } from "./Header.jsx";
import { MainArea } from "./MainArea.jsx";
import { pageHome, pageSearchResult } from "./constants.jsx";
import { createDefaultHeaderSettings } from "./utilities.jsx";

function App() {
  const [page, setPage] = useState(pageHome);
  const [search, setSearch] = useState("");
  const [headerSettings, setHeaderSettings] = useState(
    createDefaultHeaderSettings()
  );
  const searchFn = (value) => {
    setSearch(value);
    setPage(pageSearchResult);
  };

  useEffect(() => {
    // z.B. fetch und dann in useState ablegen

    return;
  });

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
