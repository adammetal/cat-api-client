const CAT_URL = "https://api.thecatapi.com/v1/images/search?limit=";

function get(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
}

function getCatsFromApi(limit = 10) {
  return get(URL + limit).then(function (data) {
    return data;
  });
}
