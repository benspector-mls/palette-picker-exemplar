import './reset.css';
import './style.css';
import './colors.css';

import { makePalette } from "./dom-helpers";
import { getPalettes, initPalettesIfEmpty } from "./local-storage";
import { copyToClipboard, handleDeletePalette, handleFormSubmit } from "./event-handlers";

const main = () => {
  initPalettesIfEmpty();
  const palettes = getPalettes();

  Object.values(palettes).forEach(makePalette);

  document.querySelector('#palettes-list').addEventListener('click', copyToClipboard);
  document.querySelector('#palettes-list').addEventListener('click', handleDeletePalette);
  document.querySelector('form').addEventListener('submit', handleFormSubmit);
}

main();