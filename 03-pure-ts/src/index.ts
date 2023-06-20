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

    protected _courseCount = 1
    readonly city: string = "Jaipur"
    constructor(public email: string, public name: string, private userId: number){
        this.email = email
        this.name = name
        this.city = "some"
    }

    private deleteToken(){
        console.log("Token deleted");
        
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get getCourseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNumber: number){
        if(courseNumber <= 1) throw new Error("Course count should be more than one")
        this._courseCount = courseNumber
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }

}

const some = new SubUser("some","some",2)

const shanid = new User("shanid@gmail.com", "shanid", 2)

// shanid.deleteToken