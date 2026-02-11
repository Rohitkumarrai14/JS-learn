const accountID=144553
let accountEmail="rohit@gmail.com"
var accountPassword="12345"
accountcity="varanasi"//variable can declare like this but not good practice 
let accountstate;  // if variable is not assigned it will give undifined answer 

//accountId=2 not allowed... it cannot be changed 
accountEmail="jhdsj@gmail.com"
accountPassword="255564"
accountcity="benguluru"

console.log(accountID);

//prefer not to use the var 
//due to issue in block scope"{}" and the functional scope "

console.table([accountID, accountEmail,accountPassword,accountcity,accountstate])
