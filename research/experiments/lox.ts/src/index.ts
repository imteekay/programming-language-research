import { promises as fs } from 'fs';
import { resolve } from 'path';
import { Tokens } from './token';
import { Scanner } from './scanner';

export class Lox {
  private static hadError: boolean = false;

  static run(source: string): void {
    const scanner: Scanner = new Scanner(source);
    const tokens: Tokens = scanner.scanTokens();

    tokens.forEach((token) => console.log(token));
  }

  static async runFile(path: string): Promise<void> {
    const filePath = resolve(__dirname, path);
    const source = await fs.readFile(filePath, 'utf8');
    this.run(source);

    if (this.hadError) process.exit();
  }

  static runPrompt(): void {
    const input = process.stdin;
    const runData = (data: Buffer) => this.run(data.toString('utf8'));

    input.on('data', runData);
  }

  static error(line: number, message: string): void {
    this.report(line, '', message);
  }

  private static report(line: number, where: string, message: string): void {
    console.log(`[line ${line}] Error${where}: ${message}`);
    this.hadError = true;
  }
}

// Lox.runFile('../examples/001.lox');
Lox.runPrompt();
