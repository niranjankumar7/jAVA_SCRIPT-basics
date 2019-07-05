
//variables
let nameofperson = "nir";
console.log(nameofperson);

//constant
const interestrate =0.4;
console.log(interestrate);

//primitives
let name ="niranjan" // string literal
let age = "18"  //number literal
let isaccepted = "true" //boolean literal
let hisname = undefined;  //undefined literal
let chosingcolor = null;  //null literal

//reference types
//object 
let person = {
    name2 : 'Nirajan',
    age2 : 18,
    zodiac : 'scorpio'
};
//if we have to change name or anything inside a object
//dot notation
person.name2 = "xyz";

//braket notation
person['name2']= "abc";
console.log(person);

//arrays
let selectedteam = ["chelsea ", "liverpool", "man u"];
console.log(selectedteam);

//function
function greet(firstname , lastname){
    console.log("niranjan" , " ", "kumar")
}
greet("firstname");

//types of function
//calculating a value
function square(number){
    return number*number ;
}
console.log(square(5));


//operators
//arthmetic operators
let x=10 , y =3;
console.log(x + y); //addition
console.log(x - y); //subtraction
console.log(x * y);  //multiplication
console.log(x / y);  // division
console.log(x ** y); //x to the power y

//increment (++)
console.log(++x); //it increases the value of x by 1
console.log(x++); //increases the value of x by 1 but shows it in the output if we call x value again

//decrement (--)
console.log(--y);
console.log(y--);

//assignment operator
x = x +5;
x +=5;    //these 2 r same.. line 68 n 69

x = x -5 ;
x -= 5 ; //these 2 r same.. line 71 n 72 

//comparison operator
//relational operator
console.log(x > 0);
console.log(x < 0);
console.log(x >= 1);
console.log(x <= 1);

//equality 
console.log(x === 10);
console.log(x !== 10);

//strict equality ( type and value should be same)
console.log(1 === 1);  //both the operands r of same type n value 
console.log("1" === 1);  //first operand is string and 2nd one is value , result is gonna be false

//lose equality  (value )this converts the type of operand on left side to right side and checks only if value is equal
console.log(1 == 1 ); 
console.log("1" == 1);

//ternary operator
//if a customer has more than 100 points 
//he/she has gold membership or 
//he/she has silver membership
let points = 120;
let type = points > 100 ? "gold" : "silver ";
console.log(type);

//logical operator with boolean 
//AND operator - symbol &&
// Returns true if both the operands are true 
let highincome = true;
let goodcreditscore = true ;
let eligibleforloan = highincome && goodcreditscore ;
console.log(eligibleforloan); 

//logical OR - symbol ||
//returns true if any one of the operator is true
let highincome1 = true ;
let goodcreditscore1 = false ;
let eligibleforloan1 = highincome || goodcreditscore ;
console.log(eligibleforloan1);

//NOT operator - symbol !
let highincome2 = false;
let goodcreditscore2 = false ;
let eligibleforloan2 = highincome2 || goodcreditscore2 ;
console.log(eligibleforloan2);

let applicationrefused = !eligibleforloan2;
console.log(applicationrefused);

//logical operators with non boolean
//falsy (false)
//undefined
//null
//0
//"" - string
//false
//NaN - not a number
// anything which is not falsy is truthy

let usercolor = "red";
let defaultcolor = "blue ";
let selectedcolor = usercolor || defaultcolor ;
console.log(selectedcolor);
//in this case user has selected red , that's the reason selected color shows red . if user has not selected any color then it would be deafault color

//swapping operator
let a = "red";
let b ='blue';
 let c =a;
 a=b;
 b=c;
 console.log(a);
 console.log(b);

 //if else 
 let hour = 10
 if (hour >= 6 && hour <12) 
console.log("good moring");
else if (hour >= 12 && hour < 18)
    console.log("good afternoon");
else 
    console.log("good evening");

//switch case
    let role = 'guest' ;
    switch (role )
    {
        case 'guest' :
            console.log("guest user");
            break;

        case 'mod':
            console.log("moderator user");
            break;

        default:
            console.log("user");     

            
    }

