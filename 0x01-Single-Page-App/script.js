window.onload = () => {
  const rootElement = document.getElementById("root");
  const button = document.createElement("button");
  button.innerHTML = "Click me for current Date";
  button.addEventListener("click", function () {
    button.innerHTML = new Date().toString();
  });
  rootElement.appendChild(button);
};
