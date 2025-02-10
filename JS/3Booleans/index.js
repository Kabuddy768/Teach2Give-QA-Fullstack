const isAdmin = true;
const isStudent = false;

function showPaymentsModule(args){
    if(args===true){
        console.log("You have access to the payments module");
    } else {
        console.log("You do not have access to the payments module");
    }
}

console.log(showPaymentsModule(isAdmin)); // You have access to the payments module
console.log(showPaymentsModule(isStudent)); // You do not have access to the payments module
console.log(5==='5');



