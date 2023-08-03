window.onload = () => {
  const rootElement = document.getElementById("root");
  const lists = [1, 2, 3];

  lists.forEach((list) => {
    let li = document.createElement("li");
    li.innerHTML = list;
    rootElement.appendChild(li);
  });
};
