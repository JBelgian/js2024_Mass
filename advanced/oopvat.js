class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }


    calculateVat() {
        return this.price * 0.21;
    }
    calculateVatIncl () {
        return this.price * 1.21;
    }
}
let product1 = new Product("apple", 1.99);
let product2 = new Product("banana", 2.99);

console.log(product1.calculateVat());
console.log(product2.calculateVat());