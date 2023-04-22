// import { showPosts } from "./functions/showPosts.js";
import { tryPosts } from "./functions/tryoutPosts.js";
import { displayHtml } from "./functions/displayHtml.js";
import { displayError } from "./functions/errorMessage.js";

const heroContainer = document.querySelector(".hero");
const homeUrl = "https://e-bjm.no/threeput/wp-json/wp/v2/pages/30?_embed";
const postsUrl =
  "https://e-bjm.no/threeput/wp-json/wp/v2/posts?_embed&per_page=15";

async function getHomeAndCarouselContent() {
  try {
    // Fetch home content
    const homeResponse = await fetch(homeUrl);
    const homeData = await homeResponse.json();
    console.log(homeData);

    // Fetch carousel content
    const postsResponse = await fetch(postsUrl);
    const blogs = await postsResponse.json();

    // Display home content
    heroContainer.innerHTML += `
      <div class="hero-img" style="background-image: url(${homeData._embedded["wp:featuredmedia"][0].source_url}">
          <div class="hero-content">
              <h1>${homeData.title.rendered}</h1>
              <h2>${homeData.content.rendered}</h2>
          </div>
      </div>
    `;

    // Display carousel content
    tryPosts(blogs);
  } catch (error) {
    console.log(error);
    displayError("error", ".html");
  }
}

setTimeout(displayHtml, 2000);
getHomeAndCarouselContent();
