
//basic types

let id:number=5 //for number decalaration
let company:string ='Xoriant'
let isPublished:boolean =true
let x:any ='hello'

x=true


//arrays that only contain numbers
let ids:number[]=[1,2,3,4,5];

//array that will take any data type
let arr:any[]=[1,"hello",true];


//tuple
let  person: [number,string,boolean]=[1,'blr',true]

//tuple with array(so added the bracket)
let employee:[number,string][]

employee=[
    [1,'brad'],
    [2,'sid'],
    [3,'max']
]

//union(if we want a partivular varaible to hold more than one type)

let pid:string | number

pid ='22'

//enum(used to define set of contants either number or numeric type)

enum direction1 {
    up,down,left,right
}

console.log(direction1.up)


//objects
type User={
    id:number,
    name:string
}
const user : User={
    id: 1,
    name: 'john',
}


//type assertion -explicitly  telling compiler we want different entity
let cid:any=1
let customerId=<number>cid

//functions

function addnum(x:number,y:number) :number{
    return x+y
}
console.log(addnum(1,2))



//interface

interface UserInterface{
    id:number,
    name:string
    age?:number
}
const user1 : UserInterface={
    id: 1,
    name: 'john',
}


//functions with interface
interface MathFunc{
    (x:number,y:number):number
}

const add: MathFunc=(x:number,y:number):number=>x+y 


//classes

class Person {
id: number
name: string


constructor(id:number,name:string){
this.id=id
this.name=name1,
}
}

const brad=new Person(1,'sid')
const mike=new Person(2,'jordan')

console.log(brad,mike)