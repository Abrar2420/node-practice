const { log } = require("console");
const fs = require("fs");

//& node.js loaded the file form the SSD and put the bytes into memory as buffer
const imageBuffer = fs.readFileSync("./imgNonEdited.jpg");

console.log(imageBuffer.length);
console.log(imageBuffer[0]);
console.log(imageBuffer[56]);
console.log(imageBuffer[1265]);
console.log(imageBuffer.subarray(0, 20).toString("hex"));
console.log(imageBuffer.subarray(0, 20));
