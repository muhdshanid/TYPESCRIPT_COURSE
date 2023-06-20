// const user: (string | number)[] = [ "hc", 1 ]
const user: [string, number, boolean] = [ "shanid", 39, false]

let rgb: [number, number, number] = [ 11, 111, 11]

type User = [number, string]

const newUser: User = [ 11, "example"]

newUser[1] = "some"

newUser.push("some")

export {}