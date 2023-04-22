// export function tryPosts(postsToDisplay) {
//   const postContainer = document.querySelector(".posts-container");
//   postContainer.innerHTML = "";

//   postsToDisplay.forEach((posts) => {
//     postContainer.innerHTML += `
//             <a href="post.html?id=${posts.id}" class="posts">
//                 <div class="posts-img">
//                 <img src=${posts._embedded["wp:featuredmedia"][0].source_url}
//                 alt=${posts._embedded["wp:featuredmedia"][0].alt_text}>
//                 </div>
//             </a>`;
//   });
// }

// ai chat
export function tryPosts(postsToDisplay) {
  const postContainer = document.querySelector(".carro-container");

  postContainer.innerHTML = "";

  postsToDisplay.forEach((post) => {
    postContainer.innerHTML += `
        <a href="post.html?id=${post.id}" class="carro">
          <div class="carro-img">
            <img src=${post._embedded["wp:featuredmedia"][0].source_url} alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
          </div>
          <div class="carro-title">
          <h3>${post.title.rendered}</h3>
          </div>
        </a>`;
  });
  const slide = document.querySelector(".carro");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  nextBtn.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;

    postContainer.scrollLeft += slideWidth;
  });

  prevBtn.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;

    postContainer.scrollLeft -= slideWidth;
  });
}
