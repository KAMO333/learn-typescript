function getProduct(id) {
  return {
    id: id,
    name: "Awesome Gadget ".concat(id),
    price: 99.5,
  };
}
// const product = getProduct(1);
// console.log(`The product ${product.Name} costs $${product.price}`);

var showProduct = function (name, price) {
  console.log("The product ".concat(name, " costs $").concat(price, "."));
};
var product = getProduct(1);
showProduct(product.price, product.name);
