"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: "some", type: "A" });
function getSearchProducts(products) {
    // do some db operations
    const myIndex = 3;
    return products[myIndex];
}
const searchProduct = (products) => {
    // do some db operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFn(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFn(3, { connection: "some", username: "some", password: "some" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
