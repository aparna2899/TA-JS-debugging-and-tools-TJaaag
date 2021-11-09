function getFullName(firstName = '',lastName = ''){
    let fullName = firstName  + lastName;
    return fullName;
}

let result = getFullName('Arya','Stark');
let expectedResult = 'Arya Stark';
if(result !== expectedResult){
    throw new Error(`${result} is not equal to ${expectedResult}`);
}


function calcTotalAmount(amount = 0, taxRate = 0){
   let totalAmount = amount + (amount * taxRate);
   return totalAmount;
}

let result2 = calcTotalAmount(2000,2);
let expectedResult2 = 6000;

if(result2 !== expectedResult2){
    throw new Error(`${result2} is not equal to ${expectedResult2}`);
}