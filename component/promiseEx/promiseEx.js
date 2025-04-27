let getProductList = new Promise((resolve, reject) => {
  resolve("productlist");
});

let singleproduct = new Promise((resolve, reject) => {
  resolve("singleproduct");
});

let orderproduct = new Promise((resolve, reject) => {
  resolve("order the product");
});

getProductList
  .then((res) => {
    console.log(res);
    return singleproduct;
  })
  .then((r) => {
    console.log(r);
    return orderproduct;
  })
  .then((r) => {
    console.log(r);
  });
