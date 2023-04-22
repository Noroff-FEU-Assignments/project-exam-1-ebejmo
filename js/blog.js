import { showPosts } from "./functions/showPosts.js";
import { searchPost } from "./functions/searchPost.js";
import { displayHtml } from "./functions/displayHtml.js";
import { displayError } from "./functions/errorMessage.js";

const postsUrl =
  "https://e-bjm.no/threeput/wp-json/wp/v2/posts?_embed&per_page=15";

async function getPosts() {
  try {
    const response = await fetch(postsUrl);
    const blogs = await response.json();

    const cardLimit = blogs.length;
    cardTotalElem.innerHTML = cardLimit;
    // console.log(results);
    // postContainer.innerHTML = "";

    showPosts(blogs);
    searchPost(blogs);
  } catch (error) {
    console.log(error);
    displayError("error", ".html");
  }
}

setTimeout(displayHtml, 2000);
getPosts();

let showMoreButton = document.querySelector(".show-more");
const cardTotalElem = document.querySelector(".posts-total");
const totalShow = document.querySelector(".none");

let blogsShowing = 10;

showMoreButton.addEventListener("click", function () {
  let boxes = [
    ...document.querySelectorAll(".blog-posts .posts-container .posts-wrapper"),
  ];
  // console.log(boxes);
  for (let i = blogsShowing; i < blogsShowing + 2; i++) {
    // console.log(boxes[i]);
    console.log(boxes);
    boxes[i].style.display = "flex";
    // console.log(boxes.length);
  }
  //   console.log(boxes[i]);
  //   console.log(boxes.length);
  blogsShowing += 2;

  if (blogsShowing >= boxes.length) {
    showMoreButton.style.display = "none";
    totalShow.style.display = "block";
  }
  console.log(boxes.length);
});
