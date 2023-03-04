// function log(message){
//     console.log(message);
// }

// var message = "Hello World";

// log(message)

// function dosomething(){
//     for(var i = 0 ; i < 5; i++){
//         console.log(i);
//     }
//     console.log('Finally '+ i); //if we can see in this line we print "i". And i is the part of above for loop. 
//                                 // That means typescript provide functionality to us that if we declare variable as a "var" keyword that means that variables we can use inside the "dosomething()" function
//                                 // and if we use "let" keywords that means that variable accessible only inside the for loop  
// }

// dosomething();

// let count = 5;
// count = 'a'; //in this case if you assign a string to count variable then it gives error because, earlier we assign number type 
// // value to count variable. so that's why we can not change it number to string.

// // so then what is the solution for above problem.
// // for that we need ta assign "any" type to count 
// // let's try it 
// let count:any=4;
// console.log(count);
// count='a';
// console.log(count);

// let a:number;
// let b:boolean;
// let c: string;
// let d:any;
// let e: number[] = [1,2,3];
// let f: any[] = [1,"abhi",true,777606];

// const ColorRed = 0;
// const ColorGreen = 1;
// const CollorBlue = 2;

// enum Color {Red, Green, Blue}
// let backgroundColor = Color.Blue;


// console.log(backgroundColor);

let message = 'abc';//in this line if we move mouse cursur over the "message" then you can see type is string
let endsWith = message.endsWith('c')//so as a result, when we type "message." then IDE provide us all string methods which applicable on message.

// but in below case it's different
let msg;
msg = 'abc';// right now when we move cursor over the 'msg' it shows it's type as 'any'
            //so when we type "msg." then it does't sugest any method.
            
// then what is the solution for above situation 
// below is the solution
let m = (<string>msg).endsWith('c');
// or
let n = (msg as string).endsWith('c');


