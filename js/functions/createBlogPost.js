export function createBlogPost(content) {
  const contentContainer = document.querySelector(".content-container");

  const myDate = content.modified_gmt;
  const date = new Date(myDate);
  console.log(
    // date.getFullYear() + " " + date.getDate() + " " + date.getMonth()
    date.toISOString()
  );

  // console.log(date);
  // console.log(content._embedded);
  // console.log(content._embedded["wp:featuredmedia"][0].alt_text);

  document.title = content.title.rendered + " | Three put...";
  contentContainer.innerHTML = `<h1>${content.title.rendered}</h1>
    <p>${date}</p>
    <p>${content._embedded.author[0].name}
    <div class="posts-img">
    <img src=${content._embedded["wp:featuredmedia"][0].source_url}
    alt="${content._embedded["wp:featuredmedia"][0].alt_text}">
  </div>
    <p>${content.content.rendered}`;
}
