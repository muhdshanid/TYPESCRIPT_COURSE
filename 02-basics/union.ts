let score: number | string = 33;

score = 44;

score = "some";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let shanid: User | Admin = {
  name: "some",
  id: 20,
};

shanid = { username: "some", id: 22 };

// function getDbId(id: number | string){

//     // making api calls
//     console.log(`DB ID is: ${id}`);

// }

getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") id.toLocaleLowerCase();
  if(typeof id === "number") id + 2
  return id
}


// array

const data: (number | string | boolean)[] = [1, 2, 3, "f", false]


let pi: 3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window" 

seatAllotment = "aisle"