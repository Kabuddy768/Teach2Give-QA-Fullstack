function myGrade(mark){
    if(mark>89){
        return 'A';
    }
    else if(mark>79){
        return 'B';
    }
    else if(mark>69){
        return 'C';
    }
    else if(mark>59){
        return 'D';
    }
    else{
        return 'F';
    }
}

console.log(`Your grade is ${myGrade(90)}`);

const myGrade2 = (mark) => {
    return mark>=89 && mark<=100 ? 'A' :
           mark>=79 ? 'B' :
           mark>=69 ? 'C' :
           mark<=59 ? 'D' : 
           'Invalid Marks';
}

console.log(myGrade2(101));