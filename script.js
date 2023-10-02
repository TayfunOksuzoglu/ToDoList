const inputEl = document.querySelector('.text-input');
const lists = document.querySelector('.lists');

inputEl.addEventListener('change', (e) => {
  const div = document.createElement('div');
  div.classList.add('list');
  lists.appendChild(div);

  const p = document.createElement('p');
  p.setAttribute('id', 'listed-item');
  p.innerText = e.target.value;
  div.appendChild(p);

  p.addEventListener('click', () => {
    p.style.textDecoration =
      p.style.textDecoration === 'line-through' ? '' : 'line-through';
  });

  const removeDiv = document.createElement('div');
  removeDiv.classList.add('remove-icon');
  removeDiv.innerText = 'X';
  div.appendChild(removeDiv);

  inputEl.value = '';

  removeDiv.addEventListener('click', () => {
    lists.removeChild(div);
  });
  p.addEventListener('dblclick', () => {
    lists.removeChild(div);
  });
});
