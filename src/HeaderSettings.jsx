import { bgModeFill, bgModeGrad } from "./constants.jsx";
import { createDefaultHeaderSettings } from "./utilities.jsx";

export const HeaderSettings = ({ headerSettings, setHeaderSettings }) => {
  const s = headerSettings;
  const update = (props) => {
    setHeaderSettings({ ...s, ...props });
  };
  return (
    <div>
      <h2>Einstellungen</h2>
      <p>
        <label>
          Suche anzeigen:
          <input
            type="checkbox"
            checked={s.showSearch}
            onChange={(e) => update({ showSearch: e.target.checked })}
          />
        </label>
      </p>
      <p>
        <label>
          Schatten anzeigen:
          <input
            type="checkbox"
            checked={s.showShadow}
            onChange={(e) => update({ showShadow: e.target.checked })}
          />
        </label>
      </p>
      <p>
        Hintergrund:
        <label>
          <input
            type="radio"
            name="bgmode"
            value={bgModeFill}
            checked={s.bgMode === bgModeFill}
            onChange={(e) => update({ bgMode: e.target.value })}
          />
          Einzelfarbe
        </label>
        <label>
          <input
            type="radio"
            name="bgmode"
            value={bgModeGrad}
            checked={s.bgMode === bgModeGrad}
            onChange={(e) => update({ bgMode: e.target.value })}
          />
          Gradient
        </label>
      </p>
      <p>
        Farben:&nbsp;
        {s.bgMode === bgModeFill && (
          <input
            type="color"
            value={s.fillColor}
            onChange={(e) => update({ fillColor: e.target.value })}
          />
        )}
        {s.bgMode === bgModeGrad && (
          <span>
            <input
              type="color"
              value={s.gradColor1}
              onChange={(e) => update({ gradColor1: e.target.value })}
            />
            &nbsp;
            <input
              type="color"
              value={s.gradColor2}
              onChange={(e) => update({ gradColor2: e.target.value })}
            />
            &nbsp;
            <input
              type="color"
              value={s.gradColor3}
              onChange={(e) => update({ gradColor3: e.target.value })}
            />
          </span>
        )}
      </p>
      {s.bgMode === bgModeGrad && (
        <p>
          Gradientwinkel:
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={s.gradDegrees}
            onChange={(e) => update({ gradDegrees: e.target.value })}
          />
          {s.gradDegrees}°
        </p>
      )}
      <p>
        <button
          onClick={() => {
            setHeaderSettings(createDefaultHeaderSettings());
          }}
        >
          Zurücksetzen
        </button>
      </p>
    </div>
  );
};
