import { displayError } from "./functions/errorMessage.js";
import { displayHtml } from "./functions/displayHtml.js";
const aboutContainer = document.querySelector(".about-container");
const aboutUrl = "https://e-bjm.no/threeput/wp-json/wp/v2/pages/20?_embed";

async function getAbout() {
  try {
    const response = await fetch(aboutUrl);
    const data = await response.json();

    console.log(data);

    document.title = data.title.rendered + " | Three put...";
    aboutContainer.innerHTML += `
    <div class="blog-top blog-top-specific">
        <div class="bread">
        <a href="index.html">Home</a>
        <span>></span>
        <a href="#" class="bread-active">About</a>
        </div>
        <h1>${data.title.rendered}</h1>
    </div>
    <div class="posts-img">
        <img class="blog-post-img" src=${data._embedded["wp:featuredmedia"][0].source_url}
        alt=${data._embedded["wp:featuredmedia"][0].alt_text}>
    </div>
    <div class="popup"> 
        <img class="popup-image" src=${data._embedded["wp:featuredmedia"][0].source_url}
        alt="${data._embedded["wp:featuredmedia"][0].alt_text}">
    </div> 
    <div class="about-content">
        <p>${data.content.rendered}</p>
    </div>`;

    const postImg = document.querySelector(".blog-post-img");
    const popup = document.querySelector(".popup");
    const popupImg = document.querySelector(".popup-image");

    postImg.addEventListener("click", function () {
      popup.style.display = "block";
      popupImg.src = this.src;
      console.log(this.src);
    });

    popup.addEventListener("click", function (event) {
      if (event.target === this) {
        console.log(event);
        this.style.display = "none";
      }
    });
  } catch (error) {
    console.log(error);
    displayError("error", ".html");
  }
}

setTimeout(displayHtml, 2000);
getAbout();
