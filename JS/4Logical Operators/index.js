let result = '2' || '3' || 'Ben ';

if(result === '5' || result === '56' || result === 'Ben') {
  console.log('Available');
}else {
  console.log('Not Available');
}

let user ={isLoggedIn: true, hasPermission: true};
if(user.isLoggedIn && user.hasPermission) {
  console.log('View Balance');
}else {
  console.log('Not Allowed');
}

let userName = ''
let displayName = userName || 'Guest';
console.log(displayName);