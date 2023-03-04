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
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, "abhi", true, 777606];
var ColorRed = 0;
var ColorGreen = 1;
var CollorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
console.log(backgroundColor);
