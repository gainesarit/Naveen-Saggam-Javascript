
console.log("good morning");

console.warn("hey ,warning");

console.info("here is your info");

console.error("this is from error");

let student ={
    name : "sarit",
    rollNo : 11,
    Loc : "Kolkata"
};

console.table(student);



let c;
console.log(typeof c);

let d=null;
console.log(typeof d);




let a=10;
let b='10';

if(a===b)
    console.log("good morning");
else
    console.log('good evening');



let day= new Date()
console.log(day)


let result='';


for (let i=0;i<=10;i++){

    result +=`${i} ,`;

}
console.log(result);


let result1="";
let number=5;
for (let i = 0; i <= number; i++) {
    for (let j = 0; j < i; j++) {
        result1 +=`*`;
    }
    result1 +=`\n`;
}
console.log(result1);


/!*---------------------------*!/
//JS Object:
let camera={
    brand:'canon',
    color:'black',
    price:35000,
    mfg:2020
};
console.log(camera);

//access the properties of an object
console.log(camera.brand);

//access the non-existing-properties
console.log(camera.megaPixel);



let mobile={};

mobile.brand='Apple';
mobile.color='Silver';
mobile.price = 35000;
mobile.isInsured=false;

console.log(mobile);

let mobile2= {

    brand :'Apple',
    color :'Silver',
    price :35000,
    isInsured : false
};
console.log(mobile2);
//READ operation
console.log(mobile.brand);//apple

//UPDATE operation
console.log(mobile.price);//35000
mobile.price=45000;
console.log(mobile.price);//45000

//DELETE operation
delete mobile.isInsured;
console.log(mobile);
delete mobile.brand;
console.log(mobile);
delete mobile.color;
console.log(mobile);
delete mobile.price;
console.log(mobile);

console.log('-------------------------shift()----------------------------');
let technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);

//unshift()
console.log('-------------------------unshift()----------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.unshift('nodejs');
console.log(technologies);

//push()
console.log('-------------------------push()----------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.push('nodejs');
console.log(technologies)


//pop()
console.log('-------------------------pop()----------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);


//sort()
console.log('-------------------------sort()----------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);

//reverse()
console.log('-------------------------reverse()---------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

//sorted reverse order
console.log('-------------------------reverse sort---------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

//splice(index)
console.log('-------------------------splice(index)--------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);
//splice(index,no-of-elements)
console.log('-------------------------splice(index,no-of-elements)--------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2,2);
console.log(technologies);
//splice(index,1,replace element)
console.log('-------------------------splice(index,1,replace element)--------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2,1,'nodejs');
console.log(technologies);
console.log('-------------------------------slice------------------------------------');
technologies=['html','css','js','jquery','bootstrap'];
let l=technologies.slice(1,4);
console.log(l);
//join()
console.log('-------------------------join()----------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
let techString=technologies.join('-');
console.log(technologies);
console.log(techString);

//split()
console.log('-------------------------split()----------------------------');
console.log(techString);
let newTech=techString.split('-');
console.log(newTech);


let employees=[
    {
        id:1,
        name:'john',
        age:40,
        designation: 'sr.manager',
        isActive: true

    },
    {
        id:2,
        name:'wilson',
        age:46,
        designation: 'sr.manager',
        isActive: false

    },
    {
        id:3,
        name:'rajan',
        age:25,
        designation: 'software engineer',
        isActive: true

    },
    {
        id:4,
        name:'laura',
        age:28,
        designation: 'Tech Lead',
        isActive: false

    },
    {
        id:5,
        name:'mahesh',
        age:30,
        designation: 'software engineer',
        isActive: true

    }
];

//filter the junior employee: age<=30
console.log('-------------------------filter()----------------------------');
juniorEmployees=[];
for(let employee of employees){
    if (employee.age<=30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);


let jrEmployees=employees.filter((employee) =>{
    return employee.age<=30;});
console.log(jrEmployees);



//find()
console.log('-------------------------find()---------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
let lang='js';
technologies.find(item =>{
    if(lang===item){
         return console.log("found");
    }
} );

let greetMe=function (){
    console.log('hello');
}
console.log(greetMe);

greetMe();

let sum=function (a,b){
    let result=a+b;
    return result;
}

console.log(sum);


let month=new Date().getMonth()+1;
console.log(month);



//function declacration
function printnNumber(startNumber,endNumber,increment) {
    let result='';
    for (let i=startNumber;i<= endNumber;i+=increment){
        result+=`${i} `;
    }
    console.log(result);
}
//function execution
printnNumber(10,500,5);


//function with parameter and return type
 let sum=function (a,b){
    let result=a+b;
    return result;
}
let output=sum(10,20);
console.log(output);

//function with an object as parameter
let printObject=function (obj) {
    console.log(obj)
}
printObject({name:'shalini',age:23});

let mobile={
    brand:'Apple',
    color:'red',
    price:40000
};

console.table(mobile);
printObject(mobile)

//function with an array as a parameter
let printArray=function (array) {
    let result = '';
    for(let index in array){
        result+=`INDEX : ${index} and value: ${array[index]}`
    }
    console.log(result);
}
printArray([10,20,30,50])
let colors=['white','red','green'];
printArray(colors);

//function inside object
let student={
    firstName:'shalini',
    lastName:'kumari',
    fullName:function () {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());

//Nested function
let outerFn=function () {
    console.log('I am outer function');
    let innerFn=function () {
        console.log('I an inner function');
    }
    innerFn();
}
outerFn();

//twisted function:
let twistedFn=function () {
    let name='john';
    let printStudent=function () {
        let student={
            name:'rajan',
            age:20,
            course:'cse'
        };
        return student;
    }
    return printStudent;
}

let a=twistedFn();
let b=a();
console.log(b.name);


//min number
console.log(Number.MIN_SAFE_INTEGER);

//max number
console.log(Number.MAX_SAFE_INTEGER);

//+ve infinity
console.log(Number.POSITIVE_INFINITY);

//-ve infinity
console.log(Number.NEGATIVE_INFINITY);

//parse int
let str1='100.05';
let num1=Number.parseInt(str1);
console.log(`${num1}, ${typeof str1} =>${typeof num1} `);

//parse float
let str2='100.05';
let num2=Number.parseFloat(str2);
console.log(`${num2}, ${typeof str2} =>${typeof num2} `);

//toString
let num3=100;
let numString=num3.toString();
console.log(`${typeof num3} =>${typeof numString} `);

//tofixed
let num4=450;
console.log(num4.toFixed(3));//fixed decimal digit place

//string object
let msg=new String('Good Morning');

console.log(`${msg}`);

//length
console.log(msg.length);

//lowercase
console.log(msg.toLowerCase());

//uppercase
console.log(msg.toUpperCase());

//substr(from,no of letters)
console.log(msg.substr(0,4));

//charAt
console.log(msg.charAt(5));// M

//charCodeAt
console.log(msg.charCodeAt(5));// 77

//Json Object
//string =>object: parse()
//object =>string: stringify()

let student={
    name:'ram',
    age:20,
    course:'cse',
    college:'IITM'
};
console.log(student);

//object to String
let studentStr=JSON.stringify(student);
console.log(studentStr);


//String to object
let newStudent=JSON.parse(studentStr);
console.log(newStudent);


