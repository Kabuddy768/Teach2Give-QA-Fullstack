function average(marksArray){
    //get total
    let total = 0;
    for (const mark of marksArray) {
        total += mark;
        
    }
    let average=0
    //get average
    average = total/marksArray.length;
    return `The total is ${total} and the avergage is ${average}`
}

console.log(average([1,2,3,4,5])) //3;
console.log(average([1,2,3,4,5])) //3;

const circleArea = (radius) => {
   return `The radius of the circle is ${radius} and the area is ${Math.PI * radius**2}`
}

console.log(circleArea(7));

const circleArea1 = (radius) => (
     `The radius of the circle is ${radius} and the area is ${Math.PI * radius**2}`
)

console.log(circleArea1(14));