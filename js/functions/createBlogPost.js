export function createBlogPost(content) {
  const contentContainer = document.querySelector(".content-container");

  const myDate = content.modified_gmt;
  const date = new Date(myDate);
  console.log(date.toISOString());

  document.title = content.title.rendered + " | Three put...";
  contentContainer.innerHTML = `<div class="blog-top blog-top-specific">
  <div class="bread">
    <a href="index.html">Home</a>
    <span>></span>
    <a href="blog.html" class="">Blog</a>
    <span>></span>
    <a href="#" class="bread-active">Post</a>
    </div>
  <h1>${content.title.rendered}</h1>
  <p class="blog-post-date">${date}</p>
  <p>${content._embedded.author[0].name}
  </div>
  
  <div class="posts-img">
    <img class="blog-post-img" src=${content._embedded["wp:featuredmedia"][0].source_url}
    alt="${content._embedded["wp:featuredmedia"][0].alt_text}">
  </div>
  <div class="popup">
    <img class="popup-image" src=${content._embedded["wp:featuredmedia"][0].source_url}
    alt="${content._embedded["wp:featuredmedia"][0].alt_text}">
  </div>
  <div class="blog-post-content">
    <p>${content.content.rendered}</p>
  </div>`;
  const postImg = document.querySelector(".blog-post-img");
  const popup = document.querySelector(".popup");
  const popupImg = document.querySelector(".popup-image");

  postImg.addEventListener("click", function () {
    popup.style.display = "block";
    popupImg.src = this.src;
    console.log(this.src);
  });

  popup.addEventListener("click", function (event) {
    if (event.target === this) {
      console.log(event);
      this.style.display = "none";
    }
  });
}
