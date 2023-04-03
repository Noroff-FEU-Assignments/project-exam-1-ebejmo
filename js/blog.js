import { showPosts } from "./functions/showPosts.js";
import { searchPost } from "./functions/searchPost.js";

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
  }
}

getPosts();

let showMoreButton = document.querySelector(".show-more");
const cardTotalElem = document.querySelector(".posts-total");

let currentItem = 10;

showMoreButton.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(".blog-posts .posts-container .posts-wrapper"),
  ];
  // console.log(boxes);
  for (let i = currentItem; i < currentItem + 2; i++) {
    // console.log(boxes[i]);
    // console.log(currentItem);
    boxes[i].style.display = "flex";
    // console.log(boxes.length);
  }
  //   console.log(boxes[i]);
  //   console.log(boxes.length);
  currentItem += 2;

  if (currentItem >= boxes.length) {
    showMoreButton.style.display = "none";
  }
  console.log(boxes.length);
};
