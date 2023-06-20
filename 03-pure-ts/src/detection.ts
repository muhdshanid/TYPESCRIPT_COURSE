function detectTypes(val: number | string) {
  if (typeof val === "string") return val.toLowerCase();
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide id");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account) {
        return account.isAdmin
    }else{
        return account.email
    }
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
        console.log(x.toLowerCase());
        
    }
  }


  type Fish = {
    swim(): void
  }

  type Bird = {
    fly(): void
  }
function isFish(pet: Fish | Bird): pet is Fish{
   return ( pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        pet
        return "bird food"
    }
}





interface Circle {
    kind: "circle",
    radius: number,

}


interface Square {
    kind: "square",
    side: number
}


interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle


function getShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius
    }
    // return shape.side * 2
}

function getArea(shape: Shape){
    switch (shape.kind) {
        case "circle":
            return shape.radius * 2
        case "square":
            return shape.side * 2
        case "rectangle":
            return shape
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}
