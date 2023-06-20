"use strict";
function detectTypes(val) {
    if (typeof val === "string")
        return val.toLowerCase();
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide id");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    else {
        return account.email;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toLowerCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius;
    }
    // return shape.side * 2
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return shape.radius * 2;
        case "square":
            return shape.side * 2;
        case "rectangle":
            return shape;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
