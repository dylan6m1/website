document.addEventListener("DOMContentLoaded", () => {
    const slideshow = document.querySelector(".slideshow-container");

  // Slideshow image URLs
  const images = [
    "images/slideshow/power_plant_01.jpg",
    "images/slideshow/vansire_01.jpg",
    "images/slideshow/springtown_pool_02_edit.jpg",
    "images/slideshow/springtown_pool_03.jpg",
    "images/slideshow/joy_again_01.jpg",
    "images/slideshow/uc_davis_01.jpg",
  ];

  // Preload images
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Create two layers for fading
  const layer1 = document.createElement("div");
  const layer2 = document.createElement("div");
  layer1.classList.add("background-layer");
  layer2.classList.add("background-layer");
  slideshow.appendChild(layer1);
  slideshow.appendChild(layer2);

  let index = 0;
  let front = true;
  layer1.style.backgroundImage = `url('${images[index]}')`;

  function changeBackground() {
    const nextImage = images[(index + 1) % images.length];
    const fadeOutLayer = front ? layer1 : layer2;
    const fadeInLayer = front ? layer2 : layer1;

    fadeInLayer.style.backgroundImage = `url('${nextImage}')`;
    fadeInLayer.style.opacity = 1;
    fadeOutLayer.style.opacity = 0;

    index = (index + 1) % images.length;
    front = !front;
  }

  setInterval(changeBackground, 7000);
});
