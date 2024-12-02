/* 
<li class="palette-container" id="uuid">
  <h3>Title</h3>
  <div class="colors-container">
    <p class="color-example">Text Example</p>
    <button class="color-copy-btn">Copy colorCode</button>
    <p class="color-example">Text Example</p>
    <button class="color-copy-btn">Copy colorCode</button>
    <p class="color-example">Text Example</p>
    <button class="color-copy-btn">Copy colorCode</button>
  </div>
  <button class="delete-palette-btn">Delete Palette</button>
  <p class="temperature">Temperature</p>
</li>
*/

export const makePalette = (palette) => {
  const paletteContainer = document.createElement('li')

  const paletteTitle = document.createElement('h3')
  const colorsContainer = document.createElement('div')
  const deleteBtn = document.createElement('button')
  const temperature = document.createElement('p')

  paletteContainer.classList.add('palette-container');
  paletteContainer.id = palette.uuid;
  paletteTitle.textContent = palette.title;

  colorsContainer.classList.add('colors-container');
  palette.colors.forEach(color => {
    const colorExample = document.createElement('p');
    const colorCopyBtn = document.createElement('button');

    colorExample.innerHTML = "Text <span class='contrast'>Example</span>"
    colorExample.style.background = color;
    colorExample.classList.add('color-example');

    colorCopyBtn.textContent = `Copy ${color}`;
    colorCopyBtn.classList.add('color-copy-btn');
    colorCopyBtn.dataset.color = color;

    colorsContainer.append(colorExample, colorCopyBtn);
  });

  deleteBtn.classList.add('delete-palette-btn');
  deleteBtn.textContent = 'Delete Palette';

  temperature.classList.add('temperature', palette.temperature);
  temperature.textContent = palette.temperature;

  paletteContainer.append(paletteTitle, colorsContainer, deleteBtn, temperature);

  document.querySelector('#palettes-list').append(paletteContainer)
}