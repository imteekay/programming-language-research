const { resolve } = require('path');

const filePath = resolve(__dirname, './example.rb');
const rubyCode = readFileSync(filePath, "utf8");

/* Tokenize */

const TOKEN_TYPES = [
  { type: 'def', regex: /\bdef\b/ },
  { type: 'end', regex: /\bend\b/ },
  { type: 'identifier', regex: /\b[a-zA-Z]+\b/ },
  { type: 'integer', regex: /\b[0-9]+\b/ },
  { type: 'oparen', regex: /\(/ },
  { type: 'cparen', regex: /\)/ },
];

const tokenize = (code) => {
  return code;
};

const tokens = tokenize(rubyCode);

console.log(tokens);
