// modules/render.js
export function renderList(items, container) {
  container.innerHTML = '';
  items.forEach(
    (item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item.name;
      container.appendChild(listItem);
    });
}
