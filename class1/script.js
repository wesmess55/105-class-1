// object litteral for the pet salon(one)
//name,phone,address(street,number),
const salon={
    name:"The Fashion pet",
    phone:"615-818-3002",
    address:{
        street:"Otter glen dr.",
        number:"100",
    },
counter:function(){
    alert("A pet was registered");
    },
    pets:[]
}

//object destructuring
let {name,phone,address:{street,number},counter,pets} =salon;
document.getElementById("footer-info").innerHTML=`
<p class="text-center">${name} ${phone} <br>${street},${number}</p>
`;
console.log(pets);
//object constructor for the pets(multiple)
class Pet{
    constructor(name,age,breed,gender,service,ownerName,contactPhone){
        this.name=name;
        this.age-age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;

    

    }
}
const scooby=new Pet("scooby",64,"Dane","male","ghosthunter","Shaggy","123-456-7897");
register(scooby);
const leo=new Pet("leo",2,"frenchie","male","comical","wes","615-818-3002");
register(leo);
const zoe= new Pet("Zoe",2,"pitbull","female","running","Ruth","9014389520");
register(zoe);
//create two pets

//register function
function register(aPet){
pets.push(aPet);

counter();

console.log(aPet);
}
function status(){
    alert("Registered pets:" + pets.length);
    console.log("Registered pets:" + pets.length);

    console.log(pets[0].name);
    console.log(pets[1].name);
    console.log(pets[2].name);
    
    for (i=0;i<3;i++){
        console.log(i);
    }

    
}


status();
