const fullname1 = function(){
    return `${this.name} ${this.company}`
    };
    
    
    
    let phone = new Object();
    phone.name="A51";
    phone.price="763azn";
    phone.company="samsung";
    phone.fullname = fullname1;
    
    
    console.log(phone.fullname())