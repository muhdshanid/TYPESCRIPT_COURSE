function addTwo (num: number):number{
    
    return num + 2
    // return "hello"
}

const getUpper = (val: string) => {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){

}

const loginUser = (name: string,email: string,isPaid: boolean = false) => {}

loginUser("h","h.com")


signUpUser("shanid", "shani@gmail.com", false)

getUpper("shanid")
let myValue = addTwo(1)


function getValue(myVal: number): string | boolean{
    if(myVal > 5) return true;
    return "200 OK"
}

const getHello = (string: string):string => {
    return "some"
}


// const heros = ["thor", "spiderman", "ironman"]
const heros = [1, "spiderman", "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errorMessage: string): void{
    console.log(errorMessage);
}
function handleError(errorMessage: string): never{
    throw new Error(errorMessage)
}


export {}

