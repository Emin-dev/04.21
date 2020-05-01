function Product(name, surname, age) {
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

let product1 = new Product(name,surname,age);
//console.log(product1.fullInfo());


let ul=document.querySelector("ul")
ul.textContent=product1.fullInfo();

})



