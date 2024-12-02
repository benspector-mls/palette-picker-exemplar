import { makePalette } from "./dom-helpers";
import { removePaletteById, addPalette } from "./local-storage";
import { v4 as generateUUID } from 'uuid';

export const handleFormSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  const newPalette = {
    title: form.paletteTitle.value,
    colors: [form.color1.value, form.color2.value, form.color3.value],
    temperature: form.temperature.value,
    uuid: generateUUID()
  };

  addPalette(newPalette);
  makePalette(newPalette);

  form.reset();
}

export const copyToClipboard = async (e) => {
  if (!e.target.matches('.color-copy-btn')) return;
  if (!navigator.clipboard) {
    // Clipboard API is not available
    return;
  }
  try {
    const { color } = e.target.dataset;
    await navigator.clipboard.writeText(color);
    e.target.textContent = `${color} copied!`;

    setTimeout(() => {
      e.target.textContent = `Copy ${color}`;
    }, 1000)
  } catch (err) {
    console.error('Failed to copy!', err);
  }
}

export const handleDeletePalette = (e) => {
  if (!e.target.matches('.delete-palette-btn')) return;
  const li = e.target.closest('li');
  removePaletteById(li.id);

  e.target.textContent = 'Deleting...'

  setTimeout(() => {
    li.remove();
  }, 500)
}