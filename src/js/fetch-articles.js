const apiKey = "2bbff87918c34fe4ae53b8cd77ecf2f8";

export default function fetchArticles() {
  const options = {
    headers: {
      Authorization: apiKey,
    },
  };

  return fetch(
    "https://newsapi.org/v2/everything?q='weather&pageSize=10",
    options
  ).then((res) =>
    res
      .json()
      .then(({ articles }) => articles)
      .catch((error) => console.log(error))
  );
}
