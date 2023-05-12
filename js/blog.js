import { showPosts } from "./functions/showPosts.js";
import { searchPost } from "./functions/searchPost.js";
import { displayHtml } from "./functions/displayHtml.js";
import { displayError } from "./functions/errorMessage.js";

const postsUrl =
  "https://e-bjm.no/threeput/wp-json/wp/v2/posts?_embed&per_page=15";

const postsTotalElem = document.querySelector(".posts-total");
const totalShow = document.querySelector(".show-total");
let showMoreButton = document.querySelector(".show-more");
let postShowing = document.querySelector(".posts-showing");
let startShow = 10;

async function getPosts() {
  try {
    const response = await fetch(postsUrl);
    const blogs = await response.json();

    const numberOfBlogs = blogs.length;
    postsTotalElem.innerHTML = numberOfBlogs;

    document.title = "Blog | Three put...";

    showPosts(blogs);
    searchPost(blogs);
  } catch (error) {
    console.log(error);
    displayError("error", ".html");
  }
}

setTimeout(displayHtml, 2000);
getPosts();

// start value
postShowing.innerHTML = startShow;

showMoreButton.addEventListener("click", function () {
  let postsHolder = [
    ...document.querySelectorAll(".blog-posts .posts-container .posts-wrapper"),
  ];
  // so the code doesnt break with uneven number of blogs
  for (let i = startShow; i < startShow + 2 && i < postsHolder.length; i++) {
    postsHolder[i].style.display = "flex";
  }
  startShow += 2;

  // update the number of postsHolder (blog/posts) showing
  postShowing.innerHTML = startShow;

  if (startShow >= postsHolder.length) {
    showMoreButton.style.display = "none";
    totalShow.style.display = "flex";
    // update the total number of postsHolder
    postsTotalElem.innerHTML = postsHolder.length;
    postShowing.style.display = "none";
  }
});
