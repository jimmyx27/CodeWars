function makeString(s) {
  let arr = s.split(" ");
  let newArr = [];
  arr.forEach((element) => newArr.push(element[0]));
  console.log(newArr.join(""));
  return newArr.join("");
}

makeString("Hello this is a test");

const makeString = (s) =>
  s
    .split(" ")
    .map((x) => x[0])
    .join("");
