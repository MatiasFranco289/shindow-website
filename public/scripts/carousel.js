const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselButtons = document.querySelectorAll(".dot");

let currentIndex = 0;
const gifDurations = [13000, 12000, 27000, 13000];
let autoSlideTimeout = null;

function moveSlide() {
  clearTimeout(autoSlideTimeout);

  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  } else if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }

  updateButtons();

  const offset = -currentIndex * 101;

  carouselItems.forEach((item) => {
    const img = item.querySelector("img");
    const src = img.src;
    img.src = "";
    img.src = src;
    item.style.transform = `translateX(${offset}%)`;
  });

  autoSlideTimeout = setTimeout(() => {
    currentIndex++;
    moveSlide();
  }, gifDurations[currentIndex]);
}

function updateButtons() {
  carouselButtons.forEach((button) => {
    button.classList.remove("active");
  });
  carouselButtons[currentIndex].classList.add("active");
}

function goToSlide(slide) {
  currentIndex = slide;
  moveSlide(currentIndex);

  clearTimeout(autoSlideTimeout);

  autoSlideTimeout = setTimeout(() => {
    currentIndex++;
    moveSlide();
  }, gifDurations[currentIndex]);
}

autoSlideTimeout = setTimeout(() => {
  currentIndex++;
  moveSlide();
}, gifDurations[currentIndex]);
updateButtons();
