// const names = ["Ivan", "Ann", "ksenia", "Voldemar"];

// const shortNames = names.filter(function (name) {
//   return name.length < 4;
// });

// console.log(shortNames);

// const answers = ["IVAN", "AnnA", "Hello"];

// const result = answers.map((item) => item.toLowerCase());

// console.log(result);

// const some = [4, 6, 10, 15];

// console.log(some.every((item) => typeof item === "number"));
// const arr = [3, 4, 6, 7, 13, 19];

// const res = arr.reduce((sum, current) => sum - current, 100);

// console.log(res);

const obj = {
  ivan: "persone",
  ann: "persone",
  dog: "animal",
  cat: "animal",
};

const newArr = Object.entries(obj)
  .filter((item) => item[1] === "persone")
  .map((item) => item[0]);

console.log(newArr);
