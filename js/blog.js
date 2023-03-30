import { showPosts } from "./functions/showPosts.js";

const postsUrl =
  "https://e-bjm.no/threeput/wp-json/wp/v2/posts?_embed&per_page=15";

async function getPosts() {
  try {
    const response = await fetch(postsUrl);
    const blogs = await response.json();

    // console.log(results);
    // postContainer.innerHTML = "";

    showPosts(blogs);
  } catch (error) {
    console.log(error);
  }
}

getPosts();
