const url = "https://kea-alt-del.dk/t7/api/products/1163/";

fetch(url)
  .then((res) => res.json())
  .then((data) => showPoduct(data));

function showProduct(product) {
  console.log(product);
}
