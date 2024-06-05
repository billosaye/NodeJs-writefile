const fs = require("fs");

//Write File
fs.writeFile("message.txt", "This is Billy", (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Information saved!');
  });





