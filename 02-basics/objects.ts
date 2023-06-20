const user = {
  name: "shanid",
  email: "some@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = {
  name: "shanid",
  isPaid: false,
  email: "some@gmail.com",
};
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

type User = {
  readonly  _id: string
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number
};

// function createAUser(user: User): User {
//     return { name: "some", email: "some", isActive: false}
// }

// createAUser({ name: "some", email: "some", isActive: false})


let myUser: User = {
    _id: "123",
    name: "some",
    email: "some@h.com",
    isActive: false
}

myUser.email = "h@gmail.com"

type CardNumber = {
    cardNumber: string
}

type CardDate = {
    cardDate: string
}

type CardCvv = {
    cvv: number
}
type CardDetails = CardNumber & CardDate & CardCvv











export {};
