export function displayHtml() {
  const html = document.querySelector(".html");
  const loader = document.querySelector(".loader");
  const body = document.querySelector("body");

  loader.style.opacity = 0;
  loader.style.display = "none";

  html.style.display = "inline";
  html.style.opacity = 1;

  body.style.alignItems = "normal";
}
