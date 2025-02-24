type animalType={
    name:string;
    age?:number;
    type:string;
}

let homeCow:animalType ={
    name:"Meni",
    age:2,
    type:"mammal"
}

console.log(homeCow);

let cat ={
    name:"Puss",
    age:1,
    type:"mammal"
}

const getAnimalDescription =(animal:animalType)=>{

}

getAnimalDescription(cat)


type rectangleType={
    width:number;
    height:number
}

const getRectangleArea =(rectangle:rectangleType)=>{
    return rectangle.height*rectangle.width
}
const getRectanglePerimeter =(rectangle:rectangleType)=>{
    return 2*(rectangle.height+rectangle.width)
}
const rectangle = {
    width:10,
    height:20
}
console.log(getRectangleArea(rectangle));
console.log(getRectanglePerimeter(rectangle));