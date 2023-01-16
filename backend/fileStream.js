const fs = require('fs');

const string = 'This is new text for testing';
fs.writeFile(`${__dirname}/test.txt`, string, (err) => {
    console.log(err);
})

fs.readFile(`${__dirname}/test.txt`, 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    } else{
        const newString = data + '\n' + 'This is second line';
        fs.writeFile(`${__dirname}/test.txt`, newString, (newError) => {
            console.log(newError);
        })
    }
})