const fs = require('fs')

const db = JSON.parse(fs.readFileSync('./src/assets/db.json'))

console.log(db.length)

const newdata = db.filter(item => item.type.value === 'outfit')

fs.writeFileSync('./outfits.json', JSON.stringify(newdata))