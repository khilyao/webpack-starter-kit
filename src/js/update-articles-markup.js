import articlesTpl from "../views/articles.hbs";
import refs from "./refs";

export default function updateArticlesMarkup(articles) {
  const markup = articlesTpl(articles);
  refs.list.insertAdjacentHTML("beforeend", markup);
}
