const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.trim().split(/\s+/);
}).on('close', function () {
    
  const n = Number(input[0]);
  let out = '';
  for (let i = 1; i <= n; i++) {
    out += '*'.repeat(i);
    if (i < n) out += '\n';
  }
    
  console.log(out);
});