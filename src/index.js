const fs = require('fs');
const zlib = require('zlib');

module.exports = {
  compressFile: (inputFilePath, outputFilePath) => {
    const readStream = fs.createReadStream(inputFilePath);
    const writeStream = fs.createWriteStream(outputFilePath);
    
    const gzip = zlib.createGzip();
    
    readStream.pipe(gzip).pipe(writeStream);
    
    console.log('File compressed successfully!');
  }
};

// Example Usage
const compression = require('./compression');

compression.compressFile('input.txt', 'output.txt.gz');
