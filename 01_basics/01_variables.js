const accountId = 1234
let emailId = "shi@yahoo.com"
var password = "s@123"
accountCity = "Indore"
let accountState;

// accountId = 6889  // not allowed as it is constant

emailId = "shi@google.com"
password = "k@890"
accountCity = "Ranchi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,emailId,password,accountCity, accountState])