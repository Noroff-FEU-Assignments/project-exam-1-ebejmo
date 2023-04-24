export function moveSlides(direction, container) {
  const screenSize = screen.width;
  let lengthOfSlide = 1;
  if (screenSize > 500 && screenSize <= 850) {
    lengthOfSlide = 2;
  } else if (screenSize > 850) {
    lengthOfSlide = 3;
  }
  const slide = document.querySelector(".carro");

  // add 20pixels to every slide width to take the gap in to account
  const slideWidth = (slide.clientWidth + 20) * lengthOfSlide;
  container.scrollLeft += direction * slideWidth;
}
