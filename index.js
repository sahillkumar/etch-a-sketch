let rows;
let cols;
let imgIndex = 0;
let mode = "solid";
let shade;
const SLIDER_MAX_VALUE = 50;

let mouseDown = false;

// canvas elements
const sketchContainer = document.querySelector(".sketchContainer");
const sketch = document.createElement("div");

// inputs
const rowSelector = document.querySelector("#rows");
const colSelector = document.querySelector("#cols");
const colorPicker = document.querySelector("#colorPicker");
const radioGroup = document.querySelector(".radioGroup");
const solidMode = document.getElementById("solid");
const rowCount = document.getElementById("rowCount");
const colCount = document.getElementById("colCount");

// buttons
const shuffleBtn = document.querySelector(".shuffleBtn");
const resetBtn = document.querySelector(".resetBtn");
const shuffleAndResetBtn = document.querySelector(".shuffleAndResetBtn");

// onload event
window.onload = () => {
  sketch.style.backgroundImage = `url(${photos[imgIndex]})`;
  solidMode.checked = true;
  shade = colorPicker.value;
  rows = rowSelector.value;
  cols = colSelector.value;
  colCount.textContent = cols;
  rowCount.textContent = rows;
  createGrid(rows, cols);
  setSliderBackground(rowSelector, rows);
  setSliderBackground(colSelector, cols);
};

// event listeners
sketch.addEventListener("mouseover", (e) => {
  if (!mouseDown) return;
  changeColor(e);
});

sketch.addEventListener("mousedown", (e) => {
  mouseDown = true;
  changeColor(e);
});

sketch.addEventListener("mouseup", () => {
  mouseDown = false;
});

rowSelector.addEventListener("input", ({ target: { value } }) => {
  rowCount.textContent = value;
  setSliderBackground(rowSelector, value);
});

// handling creation of grid on change event for performance
rowSelector.addEventListener("change", ({ target: { value } }) => {
  rows = value;
  createGrid(rows, cols);
});

colSelector.addEventListener("input", ({ target: { value } }) => {
  colCount.textContent = value;
  setSliderBackground(colSelector, value);
});

// handling creation of grid on change event for performance
colSelector.addEventListener("change", ({ target: { value } }) => {
  cols = value;
  createGrid(rows, cols);
});

colorPicker.addEventListener("change", (e) => {
  shade = e.target.value;
});

radioGroup.onclick = (e) => {
  if (e.target.name === "mode") {
    mode = e.target.value;
    afterEffects(mode);
  }
};

shuffleBtn.addEventListener("click", shuffleImg);

resetBtn.addEventListener("click", (e) => {
  createGrid(rows, cols);
});

shuffleAndResetBtn.addEventListener("click", (e) => {
  shuffleImg();
  createGrid(rows, cols);
});

// Helper functions
const afterEffects = (mode) => {
  const disabled = mode !== "solid" ? true : false;
  colorPicker.disabled = disabled;
  if (disabled) colorPicker.classList.add("disabled");
  else colorPicker.classList.remove("disabled");
};

function shuffleImg() {
  imgIndex = imgIndex === photos.length - 1 ? 0 : (imgIndex += 1);
  sketch.style.backgroundImage = `url(${photos[imgIndex]})`;
}

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

  sketchContainer.appendChild(sketch);
}

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeColor = (e) => {
  e.preventDefault();
  let currShade = shade;
  if (mode === "multi") currShade = getRandomColor();
  else if (mode === "eraser") currShade = "transparent";
  e.target.style.backgroundColor = currShade;
};

const setSliderBackground = (targetElement, value) => {
  targetElement.style.background = getSliderActiveBgColor(value);
};

const getSliderActiveBgColor = (value) => {
  const progress = (value / SLIDER_MAX_VALUE) * 100;
  return `linear-gradient(to right, #107895 ${progress}%, #ccc ${progress}%)`;
};

const photos = [
  "https://mrwallpaper.com/images/high/windows-landscape-rick-and-morty-pc-4k-6x8r1d99u3xfgvxg.jpg",
  "https://www.desktopbackground.org/p/2011/03/02/165718_zootopia-wallpaper-movies-animation-zootopia-best-animation_4767x3300_h.jpg",
  "https://i.pinimg.com/736x/68/f1/71/68f171a7671807151e8c7615043e4e57.jpg",
  "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/931/524/1c1efe99-the-simpsons-660-ap.jpg?ve=1&tl=1",
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2016/12/Scooby-Doo-and-the-Mystery-Gang.jpg",
  "https://rukminim2.flixcart.com/image/850/1000/kkwwu4w0/poster/x/p/p/medium-doraemon-cartoon-waterproof-vinyl-sticker-poster-can2481-original-imagy5emxzpffnwm.jpeg?q=90&crop=false",
  "https://w0.peakpx.com/wallpaper/247/434/HD-wallpaper-anime-girl-cute-cartoon-characters.jpg",
  "https://www.boredpanda.com/blog/wp-content/uploads/2022/02/cute-animated-characters-17-6206579c2dad1__700.jpg",
  "https://www.moople.in/blog/wp-content/uploads/2018/02/mickey-mouse-30-2024.jpg",
  "https://variety.com/wp-content/uploads/2016/05/adventure-time.jpg?w=1000&h=667&crop=1",
  "https://images.wondershare.com/filmora/article-images/2022/04/iconic%20cartoon%20characters-4.jpg",
  "https://cdn.britannica.com/26/175326-050-8E3D0CF1/scene-Dumbo.jpg",
  "https://sm.ign.com/ign_in/screenshot/default/dragon-ball-super-goku-image-2_29aa.jpg",
];
