export function createBlogPost(content) {
  const contentContainer = document.querySelector(".content-container");

  console.log(content._embedded);
  console.log(content._embedded["wp:featuredmedia"][0].alt_text);

  document.title = content.title.rendered + " | Three put...";
  contentContainer.innerHTML = `<h1>${content.title.rendered}</h1>
    <p>${content.date_gmt}</p>
    <p>${content._embedded.author[0].name}
    <div class="posts-img">
    <img src=${content._embedded["wp:featuredmedia"][0].source_url}
    alt="${content._embedded["wp:featuredmedia"][0].alt_text}">
  </div>
    <p>${content.content.rendered}`;
}
