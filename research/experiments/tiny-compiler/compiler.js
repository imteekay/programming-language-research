const trim = (string) => string.trim();

const isNotEmpty = (string) => string.length;

const lexicalAnalyzer = (string) =>
  string.split(' ').map(trim).filter(isNotEmpty);

const Operator = Symbol('operator');
const Num = Symbol('num');

const peek = (tokens, index) => tokens[index];

const parse = (tokens) => {
  let c = 0;

  const parseNum = () => {
    const val = parseInt(peek(tokens, c));

    c++;

    return {
      val,
      type: Num,
    };
  };

  const parseOperator = () => {
    const val = peek(tokens, c);
    const node = {
      val,
      type: Operator,
      expr: [],
    };

    c++;

    while (peek(tokens, c)) {
      node.expr.push(parseExpression());
    }

    return node;
  };

  const parseExpression = () =>
    /\d/.test(peek(tokens, c)) ? parseNum() : parseOperator();

  return parseExpression();
};

const tokens = lexicalAnalyzer('mul 3 sub 2 sum 1 3 4');
console.log(tokens);

const result = parse(tokens);
console.log(JSON.stringify(result, null, 2));
