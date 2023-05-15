const root = document.querySelector('#root');

function renderLimitInputField() {
  const limitEl = document.createElement('input');
  limitEl.id = 'limit';
  limitEl.type = 'number';
  limitEl.placeholder = 'Limit...';
  root.append(limitEl);
}

renderLimitInputField();
