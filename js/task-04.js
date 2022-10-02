const decerementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;

const decrement = () => {
  counter.textContent = counterValue -= 1;
};

const increment = () => {
  counter.textContent = counterValue += 1;
};

decerementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);


