import { showPosts } from "./showPosts.js";

// same search function as previous projects. remove because of bugs or fix bugs?
export function searchPost(posts) {
  const searchBar = document.querySelector(".search-bar");
  searchBar.onkeyup = function () {
    const value = event.target.value.trim().toLowerCase();
    console.log(value);

    const filteredPosts = posts.filter((post) => {
      if (post.title.rendered.toLowerCase().startsWith(value)) {
        return true;
      }
    });
    showPosts(filteredPosts);
  };
}
