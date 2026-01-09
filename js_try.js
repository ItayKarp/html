function finalPrice(price, discount){
    return price * (1 - discount / 100);
}
console.log(finalPrice(200, 10));
console.log(finalPrice(250, 5));
console.log(finalPrice(500, 50));
