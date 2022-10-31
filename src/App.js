import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img alt="tranlate" src="translate.png" width="12%" />
        <h1>{t("welcome")}</h1>
        <p>
          <button
            onClick={() => i18n.changeLanguage("en")}
            disabled={i18n.language === "en"}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage("hi_IN")}
            disabled={i18n.language === "hi_IN"}
          >
            Hindi
          </button>
          <button
            onClick={() => i18n.changeLanguage("de")}
            disabled={i18n.language === "de"}
          >
            DE
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
