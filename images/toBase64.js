
//https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript

//https://stackabuse.com/bytes/converting-images-and-image-urls-to-base64-in-node-js/

import * as fs from 'node:fs/promises';
import { folder, shareKey, CTRCount, outputfolder } from '../config.js'

var files = await fs.readdir(folder)

files.forEach(async fileName => {
    var file = await readFile(folder + fileName)
    let base64Image = Buffer.from(file, 'binary').toString('base64');
    writeFile(outputfolder + fileName, base64Image);
})

var data = await fs.readFile(folder + files[0])
let base64Image = Buffer.from(data, 'binary').toString('base64');

// console.log(base64Image);

/**
 * 
 * @param {string} filePath 
 * @returns Buffer
 */
async function readFile(filePath) {
    var file = await fs.readFile(filePath)
    return file
}

/**
 * 
 * @param {string} filePath 
 * @param {Buffer} fileData 
 */
function writeFile(filePath, fileData) {
    fs.writeFile(filePath + ".base64", fileData);
}