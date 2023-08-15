/* const content = document.getElementById("content");

const increment = () => {
  content.innerText = Number(content.innerText) + 1;
};
const decrement = () => {
  const c = Number(content.innerText);
  if (c <= 0) {
    return alert("sorry");
  } else {
    content.innerText = c - 1;
  }
};
 */

// select dom
const counter = document.getElementById("content");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

// initial state
let count = 0;
increment.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});
decrement.addEventListener("click", () => {
  count--;
  counter.innerText = count;
});
