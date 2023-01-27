const button1 = document.querySelector("#test1");
const button2 = document.querySelector("#test2");
const button3 = document.querySelector("#test3");
const button4 = document.querySelector("#test4");

button1.addEventListener("click", (event) => {
  console.log(event.target.id);
  let testNum = event.target.dataset.test;
  getMiddle(testNum);
});
button2.addEventListener("click", (event) => {
  console.log(event.target.id);
  let testNum = event.target.dataset.test;
  getMiddle(testNum);
});
button3.addEventListener("click", (event) => {
  console.log(event.target.id);
  let testNum = event.target.dataset.test;
  getMiddle(testNum);
});
button4.addEventListener("click", (event) => {
  console.log(event.target.id);
  let testNum = event.target.dataset.test;
  getMiddle(testNum);
});

function getMiddle(s) {
  let middle =
    s.length % 2 === 0 ? s.length / 2 - 1 : Math.round(s.length / 2) - 1;
  console.log(s[middle]);
  return s.length % 2 === 0 ? s[middle] + s[middle + 1] : s[middle];
}
