import {Token} from '../token/token';

const OPERATIONS_KIND: Object = {
    '=': 'equal',
    '+': 'plus',
    '-': 'minus',
    '*': 'multi',
    '/': 'div',
    'print': 'print',
    'if': 'if',
    'define': 'define'
};

export class Operation {
    private TOKENS: Token[];
    private index: number;
    operators: Token[] = [];

    constructor(TOKENS: Token[], index = 0) {
        this.TOKENS = TOKENS;
        // index - open bracet, index + 1 - operation
        this.index = index + 1;

        // default operator
        if (!TOKENS[this.index].isOperation) {
            this.TOKENS.splice(1, 0, new Token('='));
        }
        this._checkOperators();
    }

    get kind() {
        let token = this.TOKENS[this.index];
        if (!OPERATIONS_KIND[token.tokenString]) {
            throw new Error(`O_o: Undefined Operator: '${token.tokenString}'`);
        }
        return OPERATIONS_KIND[token.tokenString];
    }

    private _checkOperators() {
        let index = this.index + 1;
        let token;
        while (true) {
            token = this.TOKENS[index];
            if (!token || token.isCloseBrace) {
                break;
            }
            this.operators.push(token);
            index++;
        }
        if (!token || !token.isCloseBrace) {
            throw new Error('O_o Parse error');
        }
    }
}
