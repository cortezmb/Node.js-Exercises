// Read a file
// Write a program that prompts the user to enter a file name, and reads in the contents of the file,
// convert the text to all caps, and prints it out.
// Assuming the file file1.txt contains the text: Hello, I am file 1.. Example output:
// $ node cap_file.js
// filename: file1.txt
// HELLO, I AM FILE 1.

//   const fs = require('fs');

//   const readline = require('readline');

//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// rl.question("Please enter name of the file: ", function(answer){
  
//   let fileName = './file1.txt';

//   fs.readFile(fileName, (error, buffer) => {

//       if(error){
//           console.log(`Error: no such file: ${answer}`);
//           return;
//       }

//       var string = buffer.toString();

//       console.log(string.toUpperCase());
//   })

//     rl.close();
// })


// DNS lookup
// Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out. Example:
// $ node dns_lookup.js
// Domain name: yahoo.com
// IP Address: 98.139.183.24
// Trigger an error condition by providing an invalid domain. See that the error gets displayed.

const readline = require('readline');
// const { ifError } = require('assert');

const dns = require('dns');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Type in domain name here: ", function(website) {

  dns.lookup(website, (error, address) => {

    if(error){
      console.log(`Error: no such domain named ${website}`);
      return;
    }
    console.log(`IP Address: ${address}`);
  })  
  rl.close();
})



