let fs = require('fs');
fs.readFile('1-file-cleaner.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    data = data.replace(/\s+/g, " ").trim();
    console.log(data);
    fs.writeFile('1-file-cleaner.txt', data, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }   
    });
});