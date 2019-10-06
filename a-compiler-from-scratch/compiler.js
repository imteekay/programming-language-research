const { resolve } = require('path');
const { readFileSync } = require('fs');

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

const tokenize = (code, tokens = []) => {
  if (!code) return tokens;

  const { token, remainingCode } = tokenizeOneToken(code);
  console.log(`Tokens`, tokens)
  console.log(`token and remaining code`, token, remainingCode)
  console.log()
  return tokenize(remainingCode, [...tokens, token]);
};

const tokenizeOneToken = (code) => {
  let result;

  TOKEN_TYPES.forEach(({ type, regex }) => {
    if (!!result) return;

    console.log(`regex`, regex)
    console.log(`code`, code)
    console.log(`type`, type)
    const re = new RegExp(`/^${regex}/`);
    const match = code.match(re);
    console.log(`match`, match)

    if (!match || !match[0]) return;

    const value = match[0];
    console.log(`value`, value)

    result = result || {
      token: { type, value },
      remainingCode: code.replace(value, '').trim()
    }
    // console.log(result)
    // console.log()
  });

  return result;
}

const tokens = tokenize(rubyCode);

console.log(tokens);
const f = () => {
  let result;

  [1, 2, 3].forEach((a) => {
    console.log(a, a == 2)
    if (a == 2) {
      result = a;
    }
  })

  return result;
}
