var fs = require('fs');

fs.readdir('.', function(err, files) {
    console.log('The list of this directory content:');
    console.log(files);
    fs.writeFile('./text.txt', files, function(err) {
        if (err) throw err;
        console.log('List has saved in new text.txt file!');
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log('text.txt file content:');
            console.log(data);
        });
    });
});