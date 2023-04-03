export function showPosts(postsToDisplay) {
  const boxContainer = document.querySelector(".box-container");

  postsToDisplay.forEach((posts) => {
    boxContainer.innerHTML += `


      <div class="box">
      <a href="post.html?id=${posts.id}" class="">
        <div class="image">
        <img src=${posts._embedded["wp:featuredmedia"][0].source_url}
        </div>

        <div class="content">
        <h3>${posts.title.rendered}</h3>
        </div>
      </a>  
      </div
    `;
    // console.log(posts._embedded["wp:featuredmedia"][0].alt_text);
  });
}

// let loadMoreBtn = document.querySelector("#load-more");

// let currentItem = 3;

// loadMoreBtn.onclick = () => {
//   let boxes = [...document.querySelectorAll(".container .box-container .box")];

//   for (var i = currentItem; i < currentItem + 3; i++) {
//     boxes[i].style.display = "inline-block";
//   }

//   currentItem += i;

//   if (currentItem >= boxes.length) {
//     loadMoreBtn.style.display = "none";
//   }
// };
