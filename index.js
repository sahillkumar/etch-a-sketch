let rows = 20;
let cols = 20;

const sketchContainer = document.querySelector(".sketchContainer");
const sketch = document.createElement("div");
sketch.classList.add("sketch");

for (let i = 0; i < rows; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < cols; j++) {
    const box = document.createElement("div");
    box.classList.add("col");
    row.append(box);
  }
  sketch.append(row);
}

sketchContainer.appendChild(sketch);
