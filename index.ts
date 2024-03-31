#! usr/bin/env node
import inquirer from "inquirer"
import PasswordPrompt from "inquirer/lib/prompts/password.js"

// I.D LOGIN 
// enter email address                      --------- done
// enter password                           --------- done
// check email or password is valid or not  --------- done

console.log ("Login Your I.D");

const email : any = "abc@gmail.com";

const checkEmail = await inquirer.prompt([{
name: "userName",
type: "any",
message:"Enter Your E-Mail Address =",
}]);

const  password : any = "asd789";
const  checkPassWord = await inquirer.prompt([{
    name: "passCode",
    type : "any",
    message : " Please Enter Your Password =",
   }
])
if (checkEmail.userName === email && checkPassWord.passCode === password){
    console.log ("User Login Successfully")
}else{
    console.log ("User Name or Password is Invaild")
}
