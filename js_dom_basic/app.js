console.log(document);

let show = (message, color) => {
    let h3tag = document.querySelector("#bn");
    h3tag.innerText = message;
    h3tag.style.backgroundColor = color;

}
let button = document.querySelector("#bt");
button.addEventListener('click', function () {
    show('Good morning', 'Pink')
});

let print = (message) => {
    let h2tag = document.querySelector("#output");
    h2tag.innerText = message;

}

let text = document.querySelector("#input");
text.addEventListener('keyup', function () {
    print(text.value);
});


let box = document.querySelector("#select");
box.addEventListener('change', function () {
    let tag = document.querySelector("#sel");
    tag.innerText = box.value;
});

let pass = document.querySelector("#psw");
let butt = document.querySelector("#btn");
butt.addEventListener('click', function () {
    if (pass.type == "password")
        pass.type = 'text';
    else
        pass.type = "password";

});

let formatNumber = (number) => {
    let result = new Intl.NumberFormat('en-In', {maximumSignificantDigits: 3}).format(number);
    return result;
}

let rangeEl = document.querySelector('#range1');
rangeEl.addEventListener('input', function () {
    let selectedAmount = rangeEl.value;
    let messageElement = document.querySelector('#msg');
    messageElement.innerText = formatNumber(selectedAmount);
});

let var1 = document.querySelector("#area");
let var2 = document.querySelector("#char");
var1.addEventListener('keyup', function () {
    var2.innerText = var1.value.length;
});

let multiplier = document.querySelector("#multiplier");
let multi = document.querySelector("#multiplicant");
let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let result = document.querySelector("#result");

multiplier.addEventListener('keyup', function () {
    number1.innerText = multiplier.value;
    result.innerText = (multiplier.value) * (multi.value);
})
multi.addEventListener('input', function () {
    number2.innerText = multi.value;
    result.innerText = (multiplier.value) * (multi.value);
})
/*-----------------------Form Validation------------------------*/
let registrationForm = document.querySelector("#register-form")
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

let validateForm = () => {
    checkUsername();
    checkUserEmail();
    checkUserPhone();
    checkUserPassword();
    checkUserCPassword();
};

let checkUsername = () => {
        let userName = document.querySelector("#name");
        let feedback = document.querySelector("#name_div");
        let regExp = /^[a-zA-Z]{4,20}$/;
        if (regExp.test(userName.value)) {
            feedback.innerText = "looks Good";
        } else {
            feedback.innerText = `Please Enter a Valid ${userName.id}`;
        }
    };
let checkUserEmail = () => {
    let userEmail = document.querySelector("#email");
    let feedback = document.querySelector("#email_div");
    let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regExp.test(userEmail.value)) {
        feedback.innerText = "looks Good";
    } else {
        feedback.innerText = `Please Enter a Valid ${userEmail.id}`;
    }
};
let checkUserPhone = () => {
    let userPhone = document.querySelector("#phone");
    let feedback = document.querySelector("#phone_div");
    let regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (regExp.test(userPhone.value)) {
        feedback.innerText = "looks Good";
    } else {
        feedback.innerText = `Please Enter a Valid ${userPhone.id}`;
    }
};
let checkUserPassword = () => {
    let userPassword = document.querySelector("#password");
    let feedback = document.querySelector("#password_div");
    let regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (regExp.test(userPassword.value)) {
        feedback.innerText = "looks Good";
    } else {
        feedback.innerText = `Please Enter a Valid ${userPassword.id}`;
    }
};
let checkUserCPassword = () => {
    let userPassword = document.querySelector("#password");
    let userCPassword = document.querySelector("#c_password");
    let feedback = document.querySelector("#c_password_div");
    let regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (regExp.test(userCPassword.value)&& userPassword.value===userCPassword.value) {
        feedback.innerText = "looks Good";
    } else {
        feedback.innerText = `Please Enter a Valid ${userCPassword.id}`;
    }
};
let userName = document.querySelector("#name");
userName.addEventListener('keyup',function(){
    checkUsername()
});
let userEmail = document.querySelector("#email");
userEmail.addEventListener('keyup',function(){
    checkUserEmail();
});
let userPhone = document.querySelector("#phone");
userPhone.addEventListener('keyup',function(){
    checkUserPhone();
});
let userPassword = document.querySelector("#password");
userPassword.addEventListener('keyup',function(){
    checkUserPassword();
});
let userCPassword = document.querySelector("#c_password");
userCPassword.addEventListener('keyup',function(){
    checkUserCPassword();
});

let name='Sarit';
localStorage.setItem('Name',name);

console.log(localStorage.getItem("Name"));

sessionStorage.setItem('Name',name);
console.log(sessionStorage.getItem("Name"));

let colurs=[{id:1,name:'Yellow'},{id:2,name:'Red'},{id:3,name:'Blue'}];

localStorage.setItem("Colour",JSON.stringify(colurs));

console.log(JSON.parse(localStorage.getItem('Colour')));

let Addtask=document.querySelector('#task-form');
Addtask.addEventListener('submit',function (event) {
   let taskElement=document.querySelector('#input-task');
   let Task=taskElement.value.trim();

   let taskList=localStorage.getItem('tasks')? JSON.parse(localStorage.getItem('tasks')): [];
   taskList.unshift(Task);
   localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTask();
    window.reload();

});
   let displayTask = () => {
       let displaytask =document.querySelector('#display');
       let taskList=localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
       if(taskList.length!== 0){
           let eachTask='';
           for(let t in taskList){
               eachTask+=`<li class="list-group-item list-group-item-action list-group-item-warning">
                              <Span class="font-weight-bold">${taskList[t]}</Span>
                                <button style="font-size:12px;float:right;color:indianred">
                                    <i class="fa fa-close"></i>
                                </button>
                          </li>`;
           }
           displaytask.innerHTML=eachTask;
       }
   };
displayTask();

let taskListEl=document.querySelector('#display');
taskListEl.addEventListener('click',function (event) {
     let targetEl=event.target;
     let actualEl=targetEl.parentElement.parentElement.innerText;
     let taskList=localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
     if(targetEl.classList.contains("fa-close")){
         taskList=taskList.filter(function(task){
             return task.trim() !== actualEl.trim();
         });
         localStorage.setItem('tasks',JSON.stringify(taskList));
         displayTask();
     }
     else{
         displayTask();
     }
});
/*------------------------------------------------------*/
let showSeries=function (start,end=10) {
   let result='';
   for(let i=start;i<=end ;i++){
       result+=`${i} `;
   }
   console.log(result);
}
showSeries(5);

let showFullSeries= (start,end=20) => {
    let result='';
    for(let i=start;i<=end ;i++){
        result+=`${i} `;
    }
    console.log(result);
}
showFullSeries(1);

let employees=[
    {
        id:1,
        Name : 'Shekhar',
        age:30,
        address:{
            street:'lane Road',
            city:'Kolkata',
            HouseNo:12
        }
    },
    {
        id:2,
        Name : 'Shek',
        age:40,
        address:{
            street:'Side Road',
            city:'Delhi',
            HouseNo:132
        }
    },
    {
        id:3,
        Name : 'gaine',
        age:50,
        address:{
            street:'Middle Road',
            city:'Mumbai',
            HouseNo:125
        }
    },
]
let employeeSort= employees.filter(function(employee){
    return employee.age<=40;
});
console.log(employeeSort);

let employeeArrowSort= employees.filter((employee) =>{
    return employee.age<=40;
});
console.log(employeeArrowSort);

let Res ='';
for(let Emp in employees){
    let e=employees[Emp];
    Res+= `${e.Name} `;
}
console.log(Res);

let Rest ='';
for(let Emp of employees){
    Rest+= `${Emp.Name} `;
}
console.log(Rest);

//Destructureing--

let {street,city,HouseNo}= employees[2].address;

console.log(street);
console.log(city);
console.log(HouseNo);

//spread operator

let numbers1=[10,50,60,70,20,30,40,80,90]

let Max=Math.max(...numbers1);
console.log(Max);

let numbers2=[56,25,85,63,45,29]

let numbers=[...numbers1,...numbers2];
console.log(numbers);

class Mobile{
    constructor(brand,price,color) {
        this.brand=brand;
        this.price=price;
        this.color=color;
    }
    getBrand(){
        return this.brand;
    }getPrice(){
        return this.price;
    }getColor(){
        return this.color;
    }
    setBrand(brand){
        this.brand=brand;
    }
    setPrice(price){
        this.price=price;
    }
    setColor(color){
        this.color=color;
    }
    showSpecification(){
        let spec=`Brand=${this.getBrand()},Price=${this.getPrice()},Color=${this.getColor()}`
        console.log(spec);
    }
}
let Guru=new Mobile('samsung','20000','Red');
Guru.showSpecification();
Guru.setBrand('apple');
Guru.setPrice('50000');
Guru.showSpecification();

class Person{
    constructor(firstName,lastName) {
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    greet(){
        let greetings=`hi ${this.getFirstName()} ${this.getLastName()}.`;
        console.log(greetings);
    }
}

class Employee extends Person{
    constructor(firstName,lastName,age,designation) {
        super(firstName,lastName);
        this.age=age;
        this.designation=designation;
    }
    getAge(){
        return this.age;
    }
    getDesignation(){
        return this.designation;
    }
    greet(){
       let show=`       hi ${this.getFirstName()} ${this.getLastName()}.
       Your age is ${this.getAge()}.
       Your Designation is ${this.getDesignation()}.`
        console.log(show);
    }
}
let John=new Employee('John','Wilson','29','Manager');
John.greet();

//for modules concepts use export before the class declaration in the file
// and need to import the same and extend the same from the other folder.

let count=0;
let interval;
let greet=() =>{
    count++;
    console.log(`The count is ${count}`);
}

interval=setInterval(greet,1000);

setTimeout(()=>{
    clearInterval(interval);
},11000);

let sum = (a,b) =>{
    return a+b;
};
let mult = (a,b) =>{
    return a*b;
};
let calculator= (a,b,callback) =>{
    return callback(a,b);
};
let output=calculator(10,20,sum);
console.log(output);

let output2=calculator(10,20,() =>{
    return 'good';
})
console.log(output2);
let output1=calculator(10,20,mult);
console.log(output1);

let employeesList=[{id:1,Name:'Sarit',Age:24},{id:2,Name:'Shekhar',Age:28}];

let createEmployee= (employee,callback) =>{
    setTimeout(() =>{
        employeesList.push(employee);
        return callback();
     },5000);

};

let displayEmployee = () =>{
    setTimeout(() =>{
        console.log(employeesList);
    },7000)
}
createEmployee({id:3,Name:'Gaine',Age:29},displayEmployee);

console.log(employeesList);
console.log(employeesList);

let promiseConcept = new Promise((resolve, reject) => {
    let isTrue=false;
        if(isTrue){
            resolve('The Work is Done');
        }
        else{
            reject('The Work is Not Done');
        }
});

promiseConcept.then((message)=>{console.log(message)}).catch((message)=>{console.error(message)});

//Async,Await concept




