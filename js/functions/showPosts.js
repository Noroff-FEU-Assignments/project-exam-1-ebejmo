export function showPosts(postsToDisplay) {
  const postContainer = document.querySelector(".posts-container");
  postContainer.innerHTML = "";

  postsToDisplay.forEach((posts) => {
    postContainer.innerHTML += `
        <div class="posts-wrapper">
          <a href="post.html?id=${posts.id}" class="posts">
            <div class="posts-flex">
                <div class="posts-img">
                  <img src=${posts._embedded["wp:featuredmedia"][0].source_url}
                  alt=${posts._embedded["wp:featuredmedia"][0].alt_text}>
                </div>
            </div>      
              <div class="posts-details">
                <h3>${posts.title.rendered}</h3>
                <p>${posts.content.rendered}</p>
              </div>
          </a>
        </div>`;
  });
}
