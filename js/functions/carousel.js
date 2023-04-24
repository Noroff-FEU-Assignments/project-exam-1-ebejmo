import { moveSlides } from "./moveSlides.js";

export function carousel(postsToDisplay) {
  const postContainer = document.querySelector(".carro-container");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  postContainer.innerHTML = "";

  postsToDisplay.forEach((post) => {
    postContainer.innerHTML += `
        <a href="post.html?id=${post.id}" class="carro">
          <div class="carro-img">
            <img src=${post._embedded["wp:featuredmedia"][0].source_url} alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
          </div>
          <div class="carro-title">
          <h3>${post.title.rendered}</h3>
          </div>
        </a>`;

    // call the function with container and do not move the slides
    moveSlides(0, postContainer);
  });

  nextBtn.addEventListener("click", function () {
    // move the slides 1 client width
    moveSlides(1, postContainer);
  });

  prevBtn.addEventListener("click", function () {
    // move the slides back 1 client width
    moveSlides(-1, postContainer);
  });
}
