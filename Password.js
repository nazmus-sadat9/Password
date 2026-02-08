const readline = require('readline');

const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number = '1234567890';
const special = '[{($@#%&)}]';
const passTypes = 'Choose a password type => \n weak (w)\n medium (m)\n strong (s)';

// show the types of password
console.log(passTypes);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// input
rl.question('Enter your password type: ',(passType)=>{
  rl.question('Enter your password: ', (pass)=>{
    passType = passType.toLowerCase();
     rl.close();

    let hasLower = false;
    let hasUpper = false;
    let hasNumber = false;
    let hasSpecial = false;

// does the password include in alphabet,number and special
for (let i = 0; i < pass.length; i++) {
  if (alphabetLower.includes(pass[i])){
     hasLower = true;
 }
  if (alphabetUpper.includes(pass[i])){
    hasUpper = true;
 }
  if (number.includes(pass[i])){
    hasNumber = true;
 }

  if (special.includes(pass[i])){
     hasSpecial = true;
 }
}

// empty password input
if(pass === '') console.log('You need to write your password');

// weak password condition
    if(passType === 'w'){
      if(pass.length < 7 && pass.length > 3 ){
        console.log('your password is weak');
      } else{
        console.log('Your password must 4-6 character');
     }
    }

// medium password condition
    else if(passType === 'm'){
       if(pass.length >= 8 && hasLowe && hasUpper && hasNumber){
        console.log('your password is medium')
      } else{
         console.log('You need to use lower, upper and 8 length character');
      }
     }

// strong password condition
    else if(passType === 's'){
      if(pass.length >= 12 && hasLower && hasUpper && hasNumber && hasSpecial){
       console.log('Your password is strong');
      } else{console.log('You need to use lower, upper, special and 12 length')}
    } else{
      console.log('Choose from this three types');
    }
 })
})


