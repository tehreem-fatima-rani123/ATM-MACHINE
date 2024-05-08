#! /usr/bin/env node
import inquirer from "inquirer";

let mybalance = 10000;
let mypin = 3455;

console.log("\n \tWellcome To M.Saleem - ATM Machine\n");
let pinAnswer = await inquirer.prompt(
    {
name :"pin",
message:"Enter your pin",
type:"number",
}
);

if(pinAnswer.pin=== mypin){
    console.log("your pin is correct");
    let operationAns = await inquirer.prompt([
        {
name:"operation",
message:"piease select option",
type:"list",
choices:["withdraw","fast cash","check balance"],

    }]);

    if(operationAns.operation==="withdraw"){
        let amountAns = await inquirer.prompt([
            {
name:"amount",
message:"Enter your amount",
type:"number",
        }
    ]
    );


        if(amountAns.amount <= mybalance){
            let balance = mybalance - amountAns.amount;
            console.log(`the remainig balance is ${balance}`);
    
        }
    else{
        console.log(`you have insufficient balance`);
    
    
    
    }


    }
else if (operationAns.operation==="fast cash"){
    let fastcashAns = await inquirer.prompt(
        [
            {
                name:"amount",
                type:"list",
                choices:["1000","3000","5000","15000"],

    }
]
);
if(fastcashAns.amount <= mybalance){
    let balance2 = mybalance - fastcashAns.amount;
    console.log(`the reamining balance is ${balance2}`);
}
else{
    console.log(`you have insufficent amount`);
}
}
else if (operationAns.operation === "check balance"){
    console.log(mybalance);
}

}


else{
    console.log("your pin is wrong");

};