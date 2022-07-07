const container = document.querySelector("#container");

const content = document.createElement("p");
content.classList.add("red");
content.textContent = "Hey! I'm red!";
content.style.color = "red";

container.appendChild(content);

const h3 = document.createElement("h3");
h3.classList.add("blue");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

container.appendChild(h3);

const div = document.createElement("div");
div.classList.add("black");
div.style.border = "thin solid black";
div.style.backgroundColor = "pink";

container.appendChild(div);

const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = "I'm in a div!";

const p = document.createElement("p");
p.classList.add("p");
p.textContent = "ME TOO!";
div.appendChild(h1);
div.appendChild(p);
