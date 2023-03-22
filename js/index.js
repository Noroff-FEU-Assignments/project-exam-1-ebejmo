const blogContainer = document.querySelector(".blog");
const baseUrl =
  "https://e-bjm.no/threeput/wp-json/wp/v2/posts?_embed&per_page=12";

async function getPosts() {
  try {
    const response = await fetch(baseUrl);
    const results = await response.json();

    console.log(results);
    blogContainer.innerHTML = "";

    results.forEach(function (blogs) {
      console.log(blogs.content.rendered);
      blogContainer.innerHTML += `
        <div>
        <div>
        ${blogs.content.rendered}
        </div>
        </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

getPosts();
