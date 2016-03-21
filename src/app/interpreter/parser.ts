import {Token} from './token/token';

export class Parser {
    inputString: string = '';
    tokens: Object[] = [];
    
    constructor(inputString:string) {
        this.inputString = inputString;
        this.parseTokens();
    }

    static isDeliver(str: string) {
        return [' ', '  ', '\n', '\t'].indexOf(str) !== -1 || Parser.isBrace(str);
    }

    static isBrace(str: string) {
        return ['(', ')'].indexOf(str) !== -1;
    }

    parseTokens() {
        const length = this.inputString.length;
        let tokenStr: string = '';
        for(let i = 0; i<length; i++) {
            if (Parser.isDeliver(this.inputString[i])) {
                if (tokenStr) {
                    this.tokens.push(new Token(tokenStr));
                    tokenStr = '';
                }
                if (Parser.isBrace(this.inputString[i])) {
                    this.tokens.push(new Token(this.inputString[i]));
                }
            } else {
                tokenStr += this.inputString[i];
            }
        }
    }
} 