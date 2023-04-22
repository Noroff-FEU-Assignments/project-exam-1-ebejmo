// import { displayHtml } from "./functions/displayHtml.js";
// import { displayError } from "./functions/errorMessage.js";

// const heroContainer = document.querySelector(".hero");
// const blogContainer = document.querySelector(".blog");
// const baseUrl =
//   "https://e-bjm.no/threeput/wp-json/wp/v2/posts?_embed&per_page=15";
// const homeUrl = "https://e-bjm.no/threeput/wp-json/wp/v2/pages/30?_embed";

// async function getPosts() {
//   try {
//     const response = await fetch(baseUrl);
//     const results = await response.json();

//     // console.log(results);
//     blogContainer.innerHTML = "";

//     results.forEach(function (blogs) {
//       //   console.log(blogs._embedded["wp:featuredmedia"][0].source_url);
//       blogContainer.innerHTML += `
//         <div>
//             <div>
//                 <h3>${blogs.title.rendered}</h3>
//                 <img src=${blogs._embedded["wp:featuredmedia"][0].source_url}
//                 alt=${blogs._embedded["wp:featuredmedia"][0].alt_text}>
//             </div>
//         </div>`;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// // getPosts();

// async function getHomeContent() {
//   try {
//     const response = await fetch(homeUrl);
//     const data = await response.json();

//     console.log(data);

//     heroContainer.innerHTML += `
//     <div class="hero-img" style="background-image: url(${data._embedded["wp:featuredmedia"][0].source_url}">
//         <div class="hero-content">
//             <h1>${data.title.rendered}</h1>
//             <h2>${data.content.rendered}</h2>
//         </div>
//     </div>
// `;
//   } catch (error) {
//     console.log(error);
//     displayError("error", ".html");
//   }
// }

// setTimeout(displayHtml, 2000);
// getHomeContent();

// function getHomeContent(){
//   const response = fetch(homeUrl);
//     const data =  response.json();

//     heroContainer.innerHTML += `
//     <div class="hero-img" style="background-image: url(${data._embedded["wp:featuredmedia"][0].source_url}">
//         <div class="hero-content">
//             <h1>${data.title.rendered}</h1>
//             <h2>${data.content.rendered}</h2>
//         </div>
//     </div>
// `;
// }

// NEW SHIT
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
