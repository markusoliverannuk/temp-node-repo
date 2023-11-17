const {readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, second)

writeFileSync('./content/third.txt', `Hey does this work, ill try to pass these 2 text files inside here: ${first}, ${second}`,{flag: 'a'})
