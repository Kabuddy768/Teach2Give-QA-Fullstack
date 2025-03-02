
// function getUsername(username: string|null) {
//   if (username !== null) {
//     return `User: ${username}`
//   } else {
//     return 'Guest'
//   }
// }

// const result = getUsername('Alice')

// // type test = Expect<Equal<typeof result, string>>

// const result2 = getUsername(null)

// type Direction ='up'|'down'|'left'|'right'
// function move(direction: Direction, distance: number) {
//   // Move the specified distance in the given direction
// }

// move('up', 10)

// move('left', 5)

// move(
//   'up-right',
//   10,
// )
// move(
//   'down-left',
//   20,
// )

// function validateUsername(username: string | null): boolean {
//   if (username ===null){
//     return false
//   }
//   if(username.length>5 &&username){
//     return true
//   }
//    return false
// }

// console.log(validateUsername("Christian"));

// const appElement = document.getElementById('app')

// if(!appElement){
//   throw new Error("App element not found")
// }



function logId(id: number) {
  console.log(`The id is ${id}`)
}

type User = {
  id: string | number
}

const user: User = {
  id: 123,
}

logId(123)



const getAlbumYear = (year: string | number | boolean) => {
  if (typeof year === 'string') {
    console.log(`The album was released in ${year}.`) // `year` is string
  } else if (typeof year === 'number') {
    console.log(`The album was released in ${year}.`) // `year` is number | boolean
  }

  console.log(year) // `year` is string | number | boolean
}

getAlbumYear(2024)


function sum(a: number, b: number): number {
  return a + b;
}

// describe('sum function', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });

type APIResponse =
  | {
      data: {
        id: string
      }
    }
  | {
      error: string
    }

const handleResponse = (response: APIResponse) => {
  // How do we check if 'data' is in the response?

  if ('data' in response) {
    return response.data.id
  } else {
    throw new Error(response.error)
  }
}






// type User1 = {
//   id: string;
//   createdAt: Date;
//   name: string;
//   email: string;
// };

// interface user1 extends BaseEntity{
//   id: string;
//   createdAt: Date;
//   name: string;
//   email: string;
// }


// type Product = {
//   id: string;
//   createdAt: Date;
//   name: string;
//   price: number;
// };

// interface Product extends BaseEntity{
//   id: string;
//   createdAt: Date;
//   name: string;
//   price: number;
// }

// interface BaseEntity {
//   id: string;
//   createdAt: Date;
// }
// type Score={
//   subject:string
// }
// const scores: {
//   [subject:string]:number
// }={};

// scores.math = 95;
// scores.english = 90;
// scores.science = 85;

// interface Scores {
//   [subject:string]:number
// }

// const scores: Scores = {
//   math: 95,
//   english: 90,
// };

// scores.athletics = 100;

// scores.french = 75;

// scores.spanish = 70;

// const sum1 = (...Num:number[])=>{
//   return Num.reduce((prev,next)=>prev+next,0)
// }

// console.log(sum1(1,2,3,4,5,6,7));


// interface StdMarks{
//   name:string
//   marks:number
// }

class StudentMarks{
  name:string
  marks:number[]

  constructor(){
    this.name="Ben Mwangi"
    this.marks=[12,13,15]
  }
}

const LoopMarks = new StudentMarks
console.log(LoopMarks);

interface AlbumOptions{
  title: string;
  artist: string;
  releaseYear: number;
}
class Album {
  title: string;
  artist: string;
  releaseYear: number;

  constructor(opt:AlbumOptions) {
    this.title = opt.title
    this.artist = opt.title
    this.releaseYear = opt.releaseYear
  }
}