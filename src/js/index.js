import "../templates/index.html";
import "reset-css";
import "../sass/main.scss";

import updateArticlesMarkup from "./update-articles-markup";
import fetchArticles from "./fetch-articles";
import refs from "./refs";

// import stunningMountainImg from "../assets/stunning-mountain.jpeg";
// import svg from "../assets/webp-logo.svg";
// import webp from "../assets/webp.webp";

fetchArticles().then(updateArticlesMarkup);

refs.body.insertAdjacentHTML(
  "beforeend",
  `<img src="${stunningMountainImg}" alt="cat" width="320" />
<img src="${svg}" alt="cat" width="320" />
<img src="${webp}" alt="cat" width="320" />`
);
