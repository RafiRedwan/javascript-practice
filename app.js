// static
// dynamic
// call
// apply
// call back   !important;
// return      !important;
// closure     !important;
// scope
//#2. first class function;
function sayName(name){
    return 'Hello '+ name;
}
var between = sayName;
var across = sayName('jordan');
var up = sayName();
console.log(between);
console.log(across);
console.log(up);
// 1. A function can be stored in an Variable
function varsity(){
    return 'Hello '+name;
}
var shatUp = varsity;
var name = shatUp;
console.log(name('Redwan'));
// 2. A function can be stored in an Array
var arr = [1,2,3,4];
arr.push(name);
console.log(arr);
// 3. A function can be stored as an Object Field or property
var person = {
    name: 'Redwan',
    sayName: name
}
console.log(sayName);
// 4. we can create function as needed
var deal = 50 + (function (){return 50}());
console.log(deal);
// 5. we can pass function as an arguments
function see(talk, told){
    return told(talk);
}
var young = see('this is', name);
console.log(young);
// 6. we can return function from another function
function base(b){
    return function(n){
        var result = 1;
        for(var i = 0; i < b; i++){
            result *= n;
        }
        return result;
    }
}
var power = base(2);
var result = power(10);
console.log(result);
//#3. inner function === means those function who can stay inside other function;
function outside(){
    console.log('I am outside function');
};
function outer(){
    function inner(){
        console.log('I am inner function');
    }
    inner();
    outside();
    console.log('I am outer function');
};
outer();
//
function add(a, b){
    function sum(){
        return a+b*3;
    }
    function sub(){
        return a-b;
    }
    function mul(){
        return a*b;
    }
    function div(){
        return a/b;
    }
    return sum() + sub() + mul() + div();
}
let c = add(5,5);
console.log(c);
//#4. Return statement
function name(firstName, lastName, gender){
    if(gender === 'male'){
        output = 'Mr.'+' '+firstName +' '+lastName;
    }else if(gender === 'female'){
       output = 'Ms.'+ firstName +' '+lastName;
    }
    return output;
}
var x = name('Redwan', 'Rafi', 'male');
console.log(x);
//
function example(){
   return {
       name: 'redwan',
       skill: ['web design', 'web develope'],
       print: function(){
           console.log(this.name, this.skill);
       }
   }
}
let obj = example();
obj.print();
//
function capital(a,b){
   return(
       a*b
   )
}
let sum = capital(3,5);
console.log(sum);
//#5. higher Order function ===  higher order function can call yourself inside other function;
let book = [1,2,3,4,5];
book.forEach(function(a){
    console.log(a);
});
// anonymous function === those function who have no name;
let poem = [1,2,3,4,5];
function hold(b){
    console.log(b);
}
poem.forEach(hold);
//#6. callback function ===  one function we can use multiple parameter;
function hello(name,sound){
    sound(name);
}
hello('Redwan', function(name){
    console.log('Hello '+name);
});
//
function elder(name, zoo){
    zoo(name);
}
elder('Redwan', function(name){
    console.log('Hi, How are you? ' +name+'!');
});
//
function local(name){
    primary(name);
}
function primary(follow){
    console.log(follow);
}
local('Twinkle cats');
//
function nation(a, b){
    return a*b;
}
let u = nation(5, 6);
console.log(u);
//
function shoot(hang){
    collect(hang);
}
function collect(hear){
    console.log(hear);
}
collect('Twinkle cats');
//
function steal(demand){
    prevent(demand);
}
function prevent(confess){
    console.log(confess);
}
var burn = steal('learn something');
//
function reserve(visit, display){
    display(visit);
}
reserve('Redwan', prepare);
function prepare(satisfy){
    console.log(satisfy);
}
//#7. function return from another function
function bold(){
    console.log('I am bold');
    return function(){
        console.log('I am child');
    }
}
var p = bold();
console.log(p());
//
function greeting(msg){
    return function(name){
        console.log(msg+' '+name);
    }
}
var good = greeting('good morning');
var food = greeting('Hello');
good('This is me');
food('this is you');
//#8. closure  === out side scope data call;
var name = 'quarrel';
function quarrel(){
    console.log('bad thing '+name);
}
quarrel();
console.dir(quarrel);
//
function struggle(msg){
    return function(name){
        console.log(msg+' '+name);
    }
}
var guide = struggle('compare');
guide('Twinkle cats');
//
function invest(prove,enjoy){
   comment(prove);
   comment(enjoy);
}
function comment(flow){
    console.log(flow);
}
invest('Redwan', 'Rafi');
//
function flatter(parameter1,parameter2){
    cultivate(parameter1);
    cultivate(parameter2);
}
function cultivate(blame){
    console.log(blame);
}
flatter('Boss','Brother');
//
function first(race){
    second(race);
    console.log(1);
}
function second(nothing){
    console.log(nothing);
    console.log(2);
}
first('hello');
second();
//
