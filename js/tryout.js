import { showPosts } from "./functions/tryoutPosts.js";

const postsUrl =
  "https://e-bjm.no/threeput/wp-json/wp/v2/posts?_embed&per_page=15";

async function getPosts() {
  try {
    const response = await fetch(postsUrl);
    const blogs = await response.json();

    const cardLimit = blogs.length;
    console.log(cardLimit);

    cardTotalElem.innerHTML = cardLimit;

    // console.log(results);
    // postContainer.innerHTML = "";

    showPosts(blogs);
  } catch (error) {
    console.log(error);
  }
}

getPosts();

let loadMoreBtn = document.querySelector("#load-more");
const cardCountElem = document.getElementById("card-count");
const cardTotalElem = document.getElementById("card-total");

// const cardLimit = blogs.length;
// console.log(cardLimit);

let currentItem = 10;
console.log(currentItem);

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".container .box-container .box")];
  console.log(boxes);
  for (let i = currentItem; i < currentItem + 2; i++) {
    // console.log(boxes[i]);
    console.log(currentItem);
    boxes[i].style.display = "flex";
    console.log(boxes.length);
  }
  //   console.log(boxes[i]);
  //   console.log(boxes.length);
  currentItem += 2;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
    console.log(boxes.length);
  }
};
