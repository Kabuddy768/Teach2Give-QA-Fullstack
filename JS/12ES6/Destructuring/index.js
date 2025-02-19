const user={
    name:"Alice",
    age:25
}

const{ name:userName, age:userAge, country:userCountry="Unknown"} = user
console.log(userName);
console.log(userCountry);

const numbers =[1,2,3,4]

// const [first, second, third, fourth, fifth= 50] = numbers

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fifth);
// console.log(fourth);
// console.log(numbers);

const user1={
    name:"Alice",
    address:{
        city:"Eldoret",
        zip:1776
    }
}
const{ name, address:{city, zip}}= user1
console.log(zip);
console.log(user1.address.city);

const num2 =[2,3,[4,5],7,8]

const[first, second,[third,fourth],fifth, sixth]= num2
console.log(fourth,third);
