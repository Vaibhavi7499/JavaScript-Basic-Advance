let getProductList = new Promise((resolve, reject) => {
  resolve("productlist");
});

let singleproduct = new Promise((resolve, reject) => {
  resolve("singleproduct");
});

let orderproduct = new Promise((resolve, reject) => {
  resolve("order the product");
  reject("error occured");
});

(async function asyncFunction() {
  try {
    let response = await getProductList;
    let res = await singleproduct;
    let r = await orderproduct;
    console.log(response);
    console.log(res);
    console.log(r);
  } catch (error) {
    console.log(error);
  }
})();
