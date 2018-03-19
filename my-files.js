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

fs.unlink(filename, (err) => {
  if (err){
    console.log(red(err));
  } else {
    console.log('boom deleted');
  }
})
