let rows = 5;
let cols = 5;
let imgIndex = 0;

const sketchContainer = document.querySelector(".sketchContainer");
const sketch = document.createElement("div");
const rowSelector = document.querySelector("#rows");
const colSelector = document.querySelector("#cols");
const modeSelector = document.querySelector("#modeSelector");
const currentColor = document.querySelector("#currentColor");
const shuffleBtn = document.querySelector(".shuffleBtn");
const resetBtn = document.querySelector(".resetBtn");
const shuffleAndResetBtn = document.querySelector(".shuffleAndResetBtn");

rowSelector.onchange = (e) => {
  rows = e.target.value;
  createGrid(rows, cols);
};

colSelector.onchange = (e) => {
  cols = e.target.value;
  createGrid(rows, cols);
};

const shuffleImg = () => {
  imgIndex = imgIndex === photos.length - 1 ? 0 : (imgIndex += 1);
  sketch.style.backgroundImage = `url(${photos[imgIndex]})`;
};

shuffleBtn.addEventListener("click", shuffleImg);

resetBtn.addEventListener("click", (e) => {
  createGrid(rows, cols);
});

shuffleAndResetBtn.addEventListener("click", (e) => {
  shuffleImg();
  createGrid(rows, cols);
});

function createGrid() {
  sketch.classList.add("sketch");

  while (sketch.firstChild) {
    sketch.firstChild.remove();
  }

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

  sketch.addEventListener("mouseover", changeColor);
  sketchContainer.appendChild(sketch);
}

const changeColor = (e) => {
  e.target.style.backgroundColor = "white";
};

window.onload = () => {
  createGrid(rows, cols);
  sketch.style.backgroundImage = `url(${photos[imgIndex]})`;
};

const photos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeUHfGpWLPe6qoloDdkEIMTukNh0YH6FqNw&s",
  "https://images.livemint.com/img/2024/03/25/1140x641/pexels-jack-geoghegan-1044056_1711197278952_1711334456910.jpg",
  "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://captainfi.com/wp-content/uploads/2022/07/Pexels-free-images-3-1024x646.jpg",
  "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://www.hindustantimes.com/ht-img/img/2024/04/22/550x309/best_skybags_luggage_1713789326726_1713789338779.jpg",
  "https://ianslife.in/sites/default/files/styles/detail_page/public/2024-05/pexels-olly-3781538.jpg?itok=SWsFmblX",
  "https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://bsmedia.business-standard.com/_media/bs/img/article/2023-04/13/full/1681383051-827.jpg?im=FeatureCrop,size=(826,465)",
  "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-freestockpro-3278215.jpg&fm=jpg",
  "https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.indianexpress.com/2022/03/Skincare-Pexels-3.jpg",
  "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];
