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
