// FileSizeCompressionExtension.js

const FileSizeCompression = require('file-size-compression');

class FileSizeCompressionExtension extends FileSizeCompression {
    constructor(filePath, options) {
        super(filePath, options);
    }

    // Add your custom extension methods here
    customMethod() {
        console.log('This is a custom extension method');
    }
}

module.exports = FileSizeCompressionExtension;


const FileSizeCompressionExtension = require('./FileSizeCompressionExtension');

const file = new FileSizeCompressionExtension('path/to/your/file.js', { /* options */ });

file.compress();
file.customMethod();
