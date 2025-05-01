function memorization() {
  let cache = {};
  return function (num) {
    console.log(cache);
    if (num in cache /* cache[num]*/) {
      console.log("getting from cache", cache[num]);
      return cache[num];
    } else {
      cache[num] = num + 5;
      console.log(cache);
      console.log("recalculated");
      return cache[num];
    }
  };
}

let a = memorization();
a(5);

let fruits = ["apple", "banana", "mango", "banana", "apple", "apple"];
let obj = {};
fruits.forEach((ele) => {
  if (obj[ele]) {
    obj[ele] = obj[ele] + 1;
  } else {
    obj[ele] = 1;
  }
});
console.log(obj);
//it 1 {apple : 1}
// it 2 {apple : 1, mango : 1}
// it 3 {apple : 1, mango : 1, banana : 1}
// it 4 {apple : 2, mango : 1, banana : 1}
// it 5 {apple : 3, mango : 1, banana : 1}
// it 5 {apple : 3, mango : 2, banana : 1}
