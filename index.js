//& sharp - an image processing library
const sharp = require("sharp");

//& an async function; this will edit the image and return/create a new edited image when called
async function editImage(img, editedImgName) {
  //& passed the img to sharp, ran methods form sharp object on img to edit it and eventually creating a new edit img file with toFile()
  await sharp(img).grayscale().blur(2).flip().toFile(editedImgName);
  console.log("done");
}

// editImage("./imgNonEdited.jpg", "imgEdited6.jpg");

async function showPixels() {
  const { data, info } = await sharp("./imgNonEdited.jpg")
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log(info);
  console.log(data.slice(0, 30));

  console.log(info.width);
  console.log(info.height);
  console.log(info.channels);

  console.log(data[0]);
  console.log(data[1]);
  console.log(data[2]);
}

// showPixels();

async function editPixels() {
  const { data, info } = await sharp("./imgNonEdited.jpg")
    .raw()
    .toBuffer({ resolveWithObject: true });

  data[0] = 255; //R
  data[1] = 0; //G
  data[2] = 0; //B

  data[3] = 255; //R
  data[4] = 0; //G
  data[5] = 0; //B

  data[6] = 255; //R
  data[7] = 0; //G
  data[8] = 0; //B

  data[9] = 255; //R
  data[10] = 0; //G
  data[11] = 0; //B

  data[12] = 255; //R
  data[13] = 0; //G
  data[14] = 0; //B

  data[15] = 255; //R
  data[16] = 0; //G
  data[17] = 0; //B

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels,
    },
  }).toFile("pixelEdited2.jpg");
}

editPixels();
