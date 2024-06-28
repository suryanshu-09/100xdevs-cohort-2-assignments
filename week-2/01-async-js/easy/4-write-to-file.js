let fs = require("fs");
let content = "Hello World";
fs.writeFile("4-write-to-file.txt", content, (err) => {
    if (err) {
        console.log(err);
    }
});