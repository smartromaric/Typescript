let num :number = 4;
if (num%2 ===0) {
    ++num;
}

console.log(num)

let smart;

function Smart(doc:any){
    return doc
}

let user : [string,number,boolean] = ["smart",22,true]
user.push("coulibaly")
console.log(user)

//enum

const enum Size  {small=1,medium,larger} // il nt y pas d'egale enum nom {small} , par defaut la premiere value est zero et on increment de 1 ainsi de suite 
let mysize :Size = Size.small;
console.log(mysize)


type Employe = {
    readonly id : number,
    name : string,
    retire:(date:Date) => void //ne retourne rien 
}
let employe : Employe = {
    id :1,
    name : "SMART",
    retire : (date:Date) => {console.log(date)}

} // let nom : {} = {}
console.log(employe)

type metric  = "cm" | "inch" //litterale expression 1 ou l'autre
type Quantity = 50|100; 