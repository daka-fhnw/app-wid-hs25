import {
  PageHome,
  PageSearchResult,
  PageHeaderSettings,
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
      {page === PageHome && <Home />}
      {page === PageSearchResult && <SearchResult search={search} />}
      {page === PageHeaderSettings && (
        <HeaderSettings
          headerSettings={headerSettings}
          setHeaderSettings={setHeaderSettings}
        />
      )}
    </main>
  );
};
