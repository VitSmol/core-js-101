// // // function extractNameFromTemplate(value) {
// // //   // throw new Error('Not implemented');
// // //   return value.replace(/Hello, /g, "").replace(/!/g, "").trim()
// // // }

// // // console.log(extractNameFromTemplate(`Hello, Chuck Norris!`));
// // // *             '┌──────────┐\n'+
// // // *  (12,3) =>  '│          │\n'+
// // // *             '└──────────┘\n'

// // function getRectangleString(width, height) {
// //   const firstLine = '┌' + '─'.repeat(width - 2) + '┐' + '\n'
// //   const lastLine = '└' + '─'.repeat(width - 2) + '┘' + '\n'
// //   let middle = ''
// //   for (let i = 0; i < height - 2; i++) {
// //     middle += '│' + ' '.repeat(width - 2) + '│' + '\n'
// //   }
// //   return firstLine + middle + lastLine
// // }

// // console.log(
// //   getRectangleString(12, 3)
// // );
// /*
// *   'hello' => 'uryyb'
// *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
// *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
// *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
// *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
// *
// */
// // let str = 'Why did the chicken cross the road?'
// // function encodeToRot13(str) {
// //  let result = [];
// //  for (let i = 0; i < str.length; i++) {
// //   if (str.charCodeAt(i) === 32 || str.charCodeAt(i) === 32 || str.charCodeAt(i) === 63) {
// //     result.push(str.charCodeAt(i))
// //   }
// //   if ((str.charCodeAt(i) >= 110 && str.charCodeAt(i) <= 122) ||  (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90)) {
// //   result.push(str.charCodeAt(i) - 13)
// //  } else if ((str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 109) ||  (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 75)) {
// //     result.push(str.charCodeAt(i) + 13)
// //   }
// // }
// // return String.fromCharCode(...result)

// // //  return string
// // }

// // let result = encodeToRot13(str)
// // console.log(result);
// // console.log(` `.charCodeAt(0));

// // console.log(Number.MAX_VALUE - 1);

// // function getLastDigit(value) {
// //   // throw new Error('Not implemented');
// //   return value.toString().at(-1)
// // }

// // let lastD = getLastDigit(5556)

// // console.log(typeof lastD);


// function generateOdds(len) {
//   return Array(len).fill(1).map((el, ind) => el + ind * 2);
// }


// // let result = generateOdds(9)
// // console.log(result);


// // let arr = [ 0, 1, 2, 3, 4, 5 ]
// // function getArrayOfPositives(arr) {
// //   // throw new Error('Not implemented');
// //   return arr.filter((el) => el > 0 );
// // }

// // let result = getArrayOfPositives(arr);
// // console.log(result);


// // const arr = [
// //          [  0, 1, 2, 3, 4 ],
// //          [ 10,11,12,13,14 ],
// //          [ 20,21,22,23,24 ],
// //          [ 30,31,32,33,34 ]
// //       ]

// // function toCsvText(arr) {
// //   return arr.reduce((acc, el) => {
// //     acc + el.toString() + '\n'
// //     return acc
// //   }, '').slice(0, -1);
// // }
// // let result = toCsvText(arr)
// // console.log(result);

// // let arrr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// // function getSecondItems(arr) {
// //   // throw new Error('Not implemented');
// //   return arr.filter((el, ind) => ind % 2 == 1);
// // }

// // let res = getSecondItems(arrr)
// // console.log(res);

// // [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
// let arr =  [ 'a', 'b' ]
// function propagateItemsByPositionIndex(arr) {
//   let result = []
//   arr.map((el, ind) => {
//     let tempStr = ``
//     if (ind === 0) {
//       result.push(el)
//     } else {
//       tempStr = ('' + el).repeat(ind + 1)
//       result.push(tempStr.split(``))
//     }
//   })
//   return result.flat()
// }

// let result = propagateItemsByPositionIndex(arr)
// console.log(result);

// const arr = [
//   { country: 'Russia', city: 'Moscow' },
//   { country: 'Belarus', city: 'Minsk' },
//   { country: 'Poland', city: 'Warsaw' },
//   { country: 'Russia', city: 'Saint Petersburg' },
//   { country: 'Poland', city: 'Krakow' },
//   { country: 'Belarus', city: 'Brest' }
// ]

function sortCitiesArray(arr) {
  return arr.sort((a, b) => a.country > b.country ? 1 : -1)
}

// let result = sortCitiesArray(arr)


// function getIdentityMatrix(n) {
//   return new Array(n).fill(0)
//     .map((el, ind) => new Array(n).fill(0)
//     .map((e,i) => i === ind ? 1 : e))
// }

// let result = getIdentityMatrix(4)
// console.log(result);

// function getIntervalArray(start, end) {
//   let count = end - start;
//   let startCount = start;
//   const result = new Array(count + 1).fill(start).map(() => {
//     const res = startCount;
//     startCount += 1;
//     return res;
//   });
//   return result;
// }
// let result = getIntervalArray(-2, 2)
// console.log(result);

let arr = [
  { country: 'Belarus', city: 'Brest' },
  { country: 'Russia', city: 'Omsk' },
  { country: 'Russia', city: 'Samara' },
  { country: 'Belarus', city: 'Grodno' },
  { country: 'Belarus', city: 'Minsk' },
  { country: 'Poland', city: 'Lodz' }
]

// function group(array, keySelector, valueSelector) {
//   // console.log(array);
//   const result = array.reduce((acc, el) => {
//     const key = keySelector(el);
//     const value = valueSelector(el);
//     return {
//       ...acc,
//       [keySelector(el)]: acc[key] ? [...acc[key], value] : [value],
//     }
//   }, {});
//   return Object.entries(result);
// }

// group(arr,`country`,`city`)


let array = [1, 2, 3, 4, 5, 6]

/*    \----/   \----/
*     head     tail
*
*   [ 1, 2 ]  => [ 2, 1 ]
*   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
*
*/
function swapHeadAndTail(arr) {
  //  throw new Error('Not implemented');
  if (arr.length % 2 === 1) {
    let oddIndex = Math.floor(arr.length / 2)
    let startArray = arr.slice(0, oddIndex)
    let endArray = arr.slice(oddIndex + 1, arr.length);
    let middleElement = arr[oddIndex];
    return [...endArray, middleElement,...startArray];
  } else {
    let index = arr.length / 2;
    let startArray = arr.slice(0, index);
    let endArray = arr.slice(index, arr.length);
    return [...endArray, ...startArray];
  }
}

swapHeadAndTail(array)
let date = `2015,1,1`
let date2 = `2016,1,1`

function isLeapYear(date) {

}
// console.log(

//   isLeapYear(date)
//   );
/*
  */
// let start = `2000,1,1,10,0,0`
// let end = `2000,1,1,11,0,0` //=> "01:00:00.000"
//  / *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
//   *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
//   *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
//   *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
//   */
//  function timeSpanToString(startDate, endDate) {
//   //  throw new Error('Not implemented');
//   // let dif = new Date(endDate).getMilliseconds() - new Date(startDate).getMilliseconds()
//   let start = new Date(`${startDate}`)
//   let end = new Date(endDate)
//   console.log(start.getHours());
//   console.log(end);
//  }

//  timeSpanToString(start, end);
// console.log(3%3);

  //  1,2   =>  3  ( = 1+2 )
  //  5,10  =>  45 ( = 5+6+7+8+9+10 )
  //  -1,1  =>  0  ( = -1 + 0 + 1 )

let start = -1;
let end = 1;

let str = `acbde debc`;

console.log(Number(`13`));
