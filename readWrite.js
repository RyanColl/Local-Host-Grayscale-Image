const fs = require('fs');

const readFile = (path, link) => {
    return new Promise((reject, resolve) => {
        fs.readFile(path, (err, contents) => {
            const path = require('path');
            let uploads = path.join('uploads', link);
            let grayscaled = path.join('grayscaled', link);
            if(err) reject(err);
            let fileCnt = contents.toString();
            let file1 = fileCnt.replace("id='image' src=''", `id='image' src='${uploads}'`);
            let file2 = file1.replace("id='gsimage' src=''", `id='gsimage' src='${grayscaled}'`);
            resolve(file2); 
        })
    })
}

const writeFile = (path, data) => {
    return new Promise((reject, resolve) => {
        fs.writeFile(path, data, (err) => {
            if(err) reject(err);
            else resolve();
        })
    })
}

module.exports = { readFile , writeFile };