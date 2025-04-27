function getProductList(callback) {
  callback("Product list");
}

function getSingleProduct(callback) {
  callback("single Product");
}

function OrderProduct(callback) {
  callback({ id: 1, product: "Laptop" });
}

getProductList((data) => {
  console.log(data);
  getSingleProduct((data) => {
    console.log(data);
    OrderProduct((data) => {
      console.log(data);
    });
  });
});
