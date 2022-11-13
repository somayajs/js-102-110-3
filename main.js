const div = document.querySelector("div");
let number = Number(div.textContent);
const counter = document.createElement("div");
counter.textContent = number;
document.body.append(counter)
const intervalHandler = setInterval(() => {
  number--;
  counter.textContent = number;
  if(number === 0) clearInterval(intervalHandler);
}, 1000);
