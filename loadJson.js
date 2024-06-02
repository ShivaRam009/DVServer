const fs = require('fs');

const filePath="./data.json";

const loadJSON = (filePath) => {
    try {
        const jsonData = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(jsonData);
    } catch (err) {
        console.error('Error reading JSON file:', err);
    }
};
module.exports=loadJSON;
