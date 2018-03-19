const { red, green, cyan } = require('chalk')
const path = require('path')
const fs = require('fs')

const filename = path.join(__dirname, 'test.txt')
// console.log(green(filename));

// fs.readdir(__dirname, (err, files) => {
//   if (err) {
//     console.log(red(err));
//   } else {
//   console.log(files);
//   }
// })
// console.log(cyan('herro'));
// fs.readFile(filename, 'utf8', (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
//
//   const lines = data
//   .split('\n')
//   .filter(x => x.length > 0)
//   .map((el, idx) => `${idx}: ${el}`)
//
//   console.log(lines);
// })

// try {
//   const syncContents = fs.readFileSync(filename, 'utf8')
//   console.log(cyan(syncContents));
// }
// catch (err) {
//   console.log(red(err));
// }

// fs.unlink(filename, (err) => {
//   if (err){
//     console.log(red(err));
//   } else {
//     console.log('boom deleted');
//   }
// })

function addFruit(type, count, filename='things.csv') {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.log(red(err));
    }

    else {
      const lines = data
        .split('\n')
        .filter(x => x.length > 0) // takes out extra string at end
        .map(x => x.split(',')) // makes arr of arrs

      const fruits = {}
      lines.forEach(x => fruits[x[0]] = x[1]) // puts it into an obj
      fruits[type] = count

      const newLines = []
      Object.keys(fruits).forEach((key) => {
        newLines.push(`${key},${fruits[key]}`)
      })

      const writeMe = newLines.join('\n') //appended new data to csv file
      fs.writeFile(filename, writeMe, 'utf8', (err) => {
        if (err) {
          console.log(err);
        }
      })
    }
  })
}

addFruit('Apple', 10)
