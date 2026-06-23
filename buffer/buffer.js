const { log, error } = require("console");
const fs = require("fs"); // file system, an in built core module with node, gives us funcitons and methods to interact with files

//& node.js loaded the file form the SSD and put the bytes into memory as buffer
const imageBuffer = fs.readFileSync("./Abrar-headshot.jpg");
/*
console.log(imageBuffer.length);
console.log(imageBuffer[0]);
console.log(imageBuffer[56]);
console.log(imageBuffer[1265]);
console.log(imageBuffer.subarray(0, 20).toString("hex"));
console.log(imageBuffer.subarray(0, 20));
*/
//? Task: Convert an image file to a Base64 string and create a data URL for HTML display

fs.readFile("./Abrar-headshot.jpg", (err, data) => {
  if (err) throw error;
  const base64String = data.toString("base64");
  log(data);
  //   log(base64String);
});

function imageToDataURL(filePath, mineType) {
  const data = fs.readFileSync(filePath); // synchronous buffer
  const base64String = data.toString("base64");
  return `data:${mineType};base64,${base64String}`;
}

const dataURL = imageToDataURL("./Abrar-headshot.jpg", "image/jpeg");
log(`<img src= "${dataURL}" />`);
