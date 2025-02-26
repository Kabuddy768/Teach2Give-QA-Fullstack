
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

const appElement = document.getElementById('app')

if(!appElement){
  throw new Error("App element not found")
}


function sum(a: number, b: number): number {
  return a + b;
}

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});