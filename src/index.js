const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = [];
  let arr = [];
  let subArr = [];
  let newResult = [];

const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
  ' ': " ",
};

// разбиваем строку на массив по 2 символа
for (let i = 0; i < expr.length; i+=2) {
  arr.push(expr[i] + expr[i + 1] );
};


// разбила на массив по 5 пар
function chunkArray(arr, chunk) {
for (let i = 0; i < arr.length; i += chunk) {
  subArr.push(arr.slice(i, i + chunk));
}
}
chunkArray(arr, 5);

// меняю 0и1 на символы, а затем на буквы
for (let k=0; k<subArr.length; k++) {
   for (let j=0; j<5; j++)  {
     if (subArr[k][j] == '00') {
        subArr[k].splice(j, 1, '');
     } else if (subArr[k][j] == '10') {
       subArr[k].splice(j, 1, '.');
     } else if (subArr[k][j] == '11') {
       subArr[k].splice(j, 1, '-');
     } else if (subArr[k][j] == '**') {
        subArr[k].splice(j, 10, ' ');
     }
   } ;
   result[k] = subArr[k].join("");
   newResult += MORSE_TABLE[result[k]];
}
// console.log(newResult);
return newResult;

};
    // write your solution here


module.exports = {
    decode
}