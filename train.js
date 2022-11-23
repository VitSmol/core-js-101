// // function extractNameFromTemplate(value) {
// //   // throw new Error('Not implemented');
// //   return value.replace(/Hello, /g, "").replace(/!/g, "").trim()
// // }

// // console.log(extractNameFromTemplate(`Hello, Chuck Norris!`));
// // *             '┌──────────┐\n'+
// // *  (12,3) =>  '│          │\n'+
// // *             '└──────────┘\n'

// function getRectangleString(width, height) {
//   const firstLine = '┌' + '─'.repeat(width - 2) + '┐' + '\n'
//   const lastLine = '└' + '─'.repeat(width - 2) + '┘' + '\n'
//   let middle = ''
//   for (let i = 0; i < height - 2; i++) {
//     middle += '│' + ' '.repeat(width - 2) + '│' + '\n'
//   }
//   return firstLine + middle + lastLine
// }

// console.log(
//   getRectangleString(12, 3)
// );
/*
*   'hello' => 'uryyb'
*   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
*   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
*   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
*    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
*
*/
let str = 'Why did the chicken cross the road?'
function encodeToRot13(str) {
 let result = [];
 for (let i = 0; i < str.length; i++) {
  if (str.charCodeAt(i) === 32 || str.charCodeAt(i) === 32 || str.charCodeAt(i) === 63) {
    result.push(str.charCodeAt(i))
  }
  if ((str.charCodeAt(i) >= 110 && str.charCodeAt(i) <= 122) ||  (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90)) {
  result.push(str.charCodeAt(i) - 13)
 } else if ((str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 109) ||  (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 75)) {
    result.push(str.charCodeAt(i) + 13)
  }
}
return String.fromCharCode(...result)

//  return string
}

let result = encodeToRot13(str)
console.log(result);
console.log(` `.charCodeAt(0));
