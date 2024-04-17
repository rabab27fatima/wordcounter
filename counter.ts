#! /usr/bin/env node 
// It tells the operating system to run it with nodejs, this line is called shebang.
//import 'inquirer' module which is command line interface for node.js
import inquirer from "inquirer";
// declare a const 'answers' and assign it to the result of inquirer.prompt function
const answers: {
    Sentence: string
} =await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "To count the words, write your statement here:"
    }
])
const words = answers.Sentence.trim().split(" ")
console.log(words) //show array of to the terminal
//print word count of sentence to console
console.log(`The word count from your sentence is ${words.length}`);