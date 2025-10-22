import {
  pageHome,
  pageSearchResult,
  pageHeaderSettings,
} from "./constants.jsx";
import { Home } from "./Home.jsx";
import { SearchResult } from "./SearchResult.jsx";
import { HeaderSettings } from "./HeaderSettings.jsx";

export const MainArea = ({
  page,
  search,
  headerSettings,
  setHeaderSettings,
}) => {
  return (
    <main>
      {page === pageHome && <Home />}
      {page === pageSearchResult && <SearchResult search={search} />}
      {page === pageHeaderSettings && (
        <HeaderSettings
          headerSettings={headerSettings}
          setHeaderSettings={setHeaderSettings}
        />
      )}
    </main>
  );
};
