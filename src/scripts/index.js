const URL = "https://api.thecatapi.com/v1/images/search?limit=";

function fetchCats(limit = 10) {
  return fetch(URL + limit)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      return data;
    });
}
