import { bgModeGrad } from "./constants.jsx";

export function createDefaultHeaderSettings() {
  return {
    showSearch: true,
    showShadow: true,
    bgMode: bgModeGrad,
    fillColor: "#2A7B9B",
    gradColor1: "#2A7B9B",
    gradColor2: "#57C785",
    gradColor3: "#EDDD53",
    gradDegrees: 90,
  };
}
