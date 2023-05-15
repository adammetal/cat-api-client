const CAT_URL = "https://api.thecatapi.com/v1/images/search?limit=";
const root = document.querySelector('#root');

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

function renderLimitInputField() {
  const limitEl = document.createElement('input');
  limitEl.id = 'limit';
  limitEl.type = 'number';
  limitEl.placeholder = 'Limit...';
  root.append(limitEl);
}

renderLimitInputField();

