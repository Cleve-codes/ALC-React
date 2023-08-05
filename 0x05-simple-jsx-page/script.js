const jsDiv = document.getElementById("dateJs");
const reactDiv = document.getElementById("dateJsx");

const render = () => {
  jsDiv.innerHTML = `
    <div class="split">
    Js template
    <input />
    <p>${new Date()}</p>
    </div>
    `;
};

setInterval(render, 1000);



// Same implementation using React
