// function userLogIn(username){
//     if (!username) {
//         console.log("please enter the user name!");
//         return
//     }
//     return `${username} is logged in to account`
// }
// console.log(userLogIn());
//this is the one type of dfunction we can declare and this  type of function we can be called before its defination,eg..
one()
function one(){
    const a=45;
    function two() {
        const b=78
        console.log(a);
        
    }
    two()
}
//this second type of decleartion and defination of a function
//and this type of functio can't be called before declartion
//eg..add(4,5)
const add = function(num1,num2){
    return num1+num2;
}
console.log(add(4,5));

//third type of function is called as arrow function it is similer to second function but here function keyword is not used
//eg..
const fun = (num1) =>{
    return num1**2
}
console.log(fun(5));
//in array function there is an another method for return the data,eg..

const fun2=(num)=>(num**3)
console.log(fun2(2));
//and object can be return as also following way

const fun3=()=>({name:"vijay",age:19,rollno:30})
console.log(fun3());

//there is another type of operator which can take multiple input as arry ,and it may called as rust opertor
//"..." depends upon its usecase it also called as spreat operator
// function r(...ele){
//     console.log(ele[1])
// //as use see here it works like array,it takes multiple input as you want to give to function
// }
// r(100,200,300,400)


//imediately invoked function expression
//for creating this type of function ,syntax is simple ,here we use two paranthese (it's having main function or function body)(it's having function call)
//it runs the function automatically 
(function mul(num1,num2){
    console.log(num1*num2);
    
})();