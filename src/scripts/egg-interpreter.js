// This file connects your EGG interpreter with the playground UI

import { parse } from './interpreter/parser.js';
import { evaluate } from './interpreter/evaluator.js';
import { topScope } from './interpreter/scope.js';

class EggInterpreter {
  constructor() {
    this.output = '';
    this.error = null;
  }

  // Custom log that appends to UI output
  print(value) {
    this.output += value + '\n';
  }

  run(code) {
    this.output = '';
    this.error = null;

    try {
      // Create a fresh scope for each run, with topScope as the base
      const scope = Object.create(topScope);

      // Inject a 'print' function into EGG so it logs via this.print
      scope.print = (value) => this.print(String(value));

      // Parse and evaluate the EGG program
      const ast = parse(code);                // Turn code into AST
      const result = evaluate(ast, scope);    // Evaluate AST with custom scope

      // If the program returns a result and didn't use print
      if (result !== undefined && this.output.trim() === '') {
        this.print(result);
      }

      return {
        output: this.output,
        error: null
      };

    } catch (err) {
      this.error = err.message || 'Unknown error occurred';
      return {
        output: this.output,
        error: this.error
      };
    }
  }
}

const eggInterpreter = new EggInterpreter();
export default eggInterpreter;
