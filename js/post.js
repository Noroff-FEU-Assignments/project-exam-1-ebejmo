import { createBlogPost } from "./functions/createBlogPost.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const blogPostUrl =
  "https://e-bjm.no/threeput/wp-json/wp/v2/posts/" + id + "?_embed";

async function getBlogPost() {
  try {
    const response = await fetch(blogPostUrl);
    const details = await response.json();

    console.log(details);
    createBlogPost(details);
  } catch (error) {
    console.log(error);
  }
}

getBlogPost();
