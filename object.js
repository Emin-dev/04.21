function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;


    this.fullInfo = function () {
        return `name :${this.name}  surname : ${this.surname}  age : ${this.age}`
    }
}


let btn=document.querySelector("#btn")

btn.addEventListener("click",function(){
let name=document.querySelector("#name").value
let surname=document.querySelector("#surname").value
let age=document.querySelector("#age").value

let p1 = new Person(name,surname,age);

let ul=document.querySelector("ul")
let li = document.createElement("LI");    
li.textContent=p1.fullInfo();  
let p = document.createElement("p");          
p.innerHTML='<input type="checkbox" >'
li.appendChild(p);

ul.appendChild(li);  
})




