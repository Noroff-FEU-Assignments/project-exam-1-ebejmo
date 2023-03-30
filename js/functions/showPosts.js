export function showPosts(postsToDisplay) {
  const postContainer = document.querySelector("#posts-container");

  postsToDisplay.forEach((posts) => {
    postContainer.innerHTML += `
          <div class="posts-card bajs">
          <a href="post.html?id=${posts.id}" class="posts">
              <div class="posts-img">
                <img src=${posts._embedded["wp:featuredmedia"][0].source_url}
                alt=${posts._embedded["wp:featuredmedia"][0].alt_text}>
              </div>
              <div class="posts-h3">
                <h3>${posts.title.rendered}</h3>
              </div>
            </a>
          </div>`;
    console.log(posts._embedded["wp:featuredmedia"][0].alt_text);
  });
}
