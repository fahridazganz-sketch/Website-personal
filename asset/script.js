let indexes = {
  baju: 0,
  celana: 0
};

function showSlide(type) {
  let slides = document.querySelectorAll("." + type + " .slide");
  slides.forEach(slide => slide.classList.remove("active"));
  slides[indexes[type]].classList.add("active");
}

function nextSlide(type) {
  let slides = document.querySelectorAll("." + type + " .slide");
  indexes[type]++;
  if (indexes[type] >= slides.length) indexes[type] = 0;
  showSlide(type);
}

function prevSlide(type) {
  let slides = document.querySelectorAll("." + type + " .slide");
  indexes[type]--;
  if (indexes[type] < 0) indexes[type] = slides.length - 1;
  showSlide(type);
}
