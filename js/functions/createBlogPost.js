export function createBlogPost(content) {
  const contentContainer = document.querySelector(".content-container");

  const myDate = content.modified_gmt;
  console.log(myDate);
  const dateTime = new Date(myDate);

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  // for swedish format
  // const dateString = dateTime.toLocaleDateString("sv-SE", options);
  // us format
  const dateString = dateTime.toLocaleDateString("en-US", options);

  document.title = content.title.rendered + " | Three put...";
  contentContainer.innerHTML = `
  <div class="blog-top blog-top-specific">
    <div class="bread">
      <a href="index.html" class="non-active">Home</a>
      <span>></span>
      <a href="blog.html" class="non-active">Blog</a>
      <span>></span>
      <a href="#" class="bread-active">Post</a>
    </div>
    <h1>${content.title.rendered}</h1>
    <p class="blog-post-date">${dateString}</p>
    <p>Posted by: ${content._embedded.author[0].name}
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

  // display the popup img on click
  postImg.addEventListener("click", function () {
    // on click show popup
    popup.style.display = "flex";
    // same img the in popup as being clicked
    popupImg.src = this.src;
  });

  // hide the popup on click
  popup.addEventListener("click", function (event) {
    // check if the clicked event same as popup and done on the background and not on child
    // if click is done on child eventlistener do not execute
    if (event.target === this) {
      // sets the popup to display none and hides it from view
      this.style.display = "none";
    }
  });
}
