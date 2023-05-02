console.log("Hello");

let box = document.querySelector(".count");
const add = () => {
  let c = box.textContent;
  c = Number(c);
  c += 1;
  box.textContent = c;
};

let box1 = document.querySelector(".count");
const diff = () => {
  let d = box1.textContent;
  d = Number(d);
  d = d - 1;
  box1.textContent = d;
};
let box2 = document.querySelector(".count");
const mul = () => {
  let e = box2.textContent;
  e = Number(e);
  e = e * 2;
  box2.textContent = e;
};
let box3 = document.querySelector(".count");
const div = () => {
  let f = box3.textContent;
  f = Number(f);
  f = f / 2;
  box3.textContent = f;
};
