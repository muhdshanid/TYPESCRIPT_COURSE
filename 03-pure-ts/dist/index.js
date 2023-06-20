"use strict";
// class User {
//     public email: string
//     private name: string
//      city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email
//         this.name = name
//         this.city = "some"
//     }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
        this.city = "some";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1)
            throw new Error("Course count should be more than one");
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const some = new SubUser("some", "some", 2);
const shanid = new User("shanid@gmail.com", "shanid", 2);
// shanid.deleteToken
