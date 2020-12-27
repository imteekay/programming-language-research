import { Tokens, Token, TokenType } from './token';
import { Lox } from './index';

export class Scanner {
  private source: string;
  private tokens: Tokens;
  private start: number;
  private current: number;
  private line: number;
  private keywords: Map<string, TokenType>;

  constructor(source: string) {
    this.source = source;
    this.tokens = [];
    this.start = 0;
    this.current = 0;
    this.line = 1;
    this.keywords = this.buildKeywords();
  };

  scanTokens(): Tokens {
    while (!this.isAtEnd()) {
      this.start = this.current;
      this.scanToken();
    };

    const token: Token = new Token(TokenType.EOF, '', 'null', this.line);
    this.tokens.push(token);
    return this.tokens;
  };

  private buildKeywords(): Map<string, TokenType> {
    const keywords: Map<string, TokenType> = new Map();

    keywords.set("and", TokenType.AND);
    keywords.set("class", TokenType.CLASS);
    keywords.set("else", TokenType.ELSE);
    keywords.set("false", TokenType.FALSE);
    keywords.set("for", TokenType.FOR);
    keywords.set("fun", TokenType.FUN);
    keywords.set("if", TokenType.IF);
    keywords.set("nil", TokenType.NIL);
    keywords.set("or", TokenType.OR);
    keywords.set("print", TokenType.PRINT);
    keywords.set("return", TokenType.RETURN);
    keywords.set("super", TokenType.SUPER);
    keywords.set("this", TokenType.THIS);
    keywords.set("true", TokenType.TRUE);
    keywords.set("var", TokenType.VAR);
    keywords.set("while", TokenType.WHILE);

    return keywords;
  }

  private isAtEnd(): boolean {
    return this.current >= this.source.length;
  };

  private scanToken(): void {
    const char: string = this.advance();

    switch (char) {
      case '(':
        this.addToken(TokenType.LEFT_PAREN);
        break;
      case ')':
        this.addToken(TokenType.RIGHT_PAREN);
        break;
      case '{':
        this.addToken(TokenType.LEFT_BRACE);
        break;
      case '}':
        this.addToken(TokenType.RIGHT_BRACE);
        break;
      case ',':
        this.addToken(TokenType.COMMA);
        break;
      case '.':
        this.addToken(TokenType.DOT);
        break;
      case '-':
        this.addToken(TokenType.MINUS);
        break;
      case '+':
        this.addToken(TokenType.PLUS);
        break;
      case ';':
        this.addToken(TokenType.SEMICOLON);
        break;
      case '*':
        this.addToken(TokenType.STAR);
        break;
      case '!':
        this.addToken(this.match('=') ? TokenType.BANG_EQUAL : TokenType.BANG);
        break;
      case '=':
        this.addToken(this.match('=') ? TokenType.EQUAL_EQUAL : TokenType.EQUAL);
        break;
      case '<':
        this.addToken(this.match('=') ? TokenType.LESS_EQUAL : TokenType.LESS);
        break;
      case '>':
        this.addToken(this.match('=') ? TokenType.GREATER_EQUAL : TokenType.GREATER);
        break;
      case '/':
        this.handleSlashOperator();
        break;
      case ' ':
      case '\r':
      case '\t':
        // Ignore whitespace.
        break;
      case '\n':
        this.line++;
        break;
      case '"':
        this.string();
        break;
      default:
        if (this.isDigit(char)) {
          this.number();
        } else if (this.isAlpha(char)) {
          this.identifier();
        } else {
          Lox.error(this.line, 'Unexpected character.');
        }

        break;
    };
  };

  private identifier(): void {
    while (this.isAlphaNumeric(this.peek())) {
      this.advance();
    }

    const text = this.source.substring(this.start, this.current);
    const tokenType: TokenType | undefined = this.keywords.get(text);

    if (tokenType) {
      this.addToken(tokenType);
    } else {
      this.addToken(TokenType.IDENTIFIER);
    }
  }

  private isAlpha(char: string): boolean {
    return (char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z') ||
      char == '_';
  }

  private isAlphaNumeric(char: string): boolean {
    return this.isAlpha(char) || this.isDigit(char);
  }

  private handleSlashOperator(): void {
    if (this.match('/')) {
      // A comment goes until the end of the line.
      // So we need to go to the end of the line.
      while (this.isEndOfLine()) {
        this.advance();
      }
    } else {
      this.addToken(TokenType.SLASH);
    }
  }

  private isEndOfLine(): boolean {
    return this.peek() != '\n' && !this.isAtEnd();
  };

  private peek(): string {
    return this.isAtEnd() ? '\0' : this.source.charAt(this.current);
  };

  private match(expected: string): boolean {
    if (this.isAtEnd()) return false;
    if (this.source.charAt(this.current) != expected) return false;

    this.current++;
    return true;
  };

  private advance(): string {
    this.current++;
    return this.source.charAt(this.current - 1);
  };

  private addToken(type: TokenType, literal: string | number | undefined = undefined): void {
    const text: string = this.source.substring(this.start, this.current);
    const token: Token = new Token(type, text, literal, this.line);
    this.tokens.push(token);
  };

  private string(): void {
    while (this.peek() != '"' && !this.isAtEnd()) {
      if (this.peek() === '\n') this.line++;
      this.advance();
    }

    if (this.isAtEnd()) {
      Lox.error(this.line, "Unterminated string.");
      return;
    }

    this.advance();

    const value = this.source.substring(this.start + 1, this.current - 1);
    this.addToken(TokenType.STRING, value);
  };

  private isDigit(char: string) {
    return char >= '0' && char <= '9';
  }

  private number(): void {
    while (this.isDigit(this.peek())) {
      this.advance();
    }

    // Look for a fractional part.
    if (this.peek() == '.' && this.isDigit(this.peekNext())) {
      // Consume the "."
      this.advance();

      while (this.isDigit(this.peek())) {
        this.advance();
      }
    }

    this.addToken(TokenType.NUMBER,
      parseFloat(this.source.substring(this.start, this.current)));
  }

  private peekNext() {
    if (this.current + 1 >= this.source.length) return '\0';
    return this.source.charAt(this.current + 1);
  }
};
