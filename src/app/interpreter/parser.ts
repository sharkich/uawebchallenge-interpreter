import {Token} from './token/token';

export class Parser {
    inputString: string = '';
    tokens: Token[] = [];
    tree: Token[] = [];// todo
    
    constructor(inputString:string) {
        this.inputString = inputString;
        this._createTokens();
        this._createTree(0);
    }

    static isDeliver(str: string) {
        return [' ', '  ', '\n', '\t'].indexOf(str) !== -1 || Parser.isBrace(str);
    }

    static isBrace(str: string) {
        return ['(', ')'].indexOf(str) !== -1;
    }

    private _createTokens() {
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
    
    private _createTree(index) {
        // todo
        this.tokens.forEach((token: Token) => {
            if (token.isOperation) {
                
            }
        });
    }

    get result() {
        // todo
        return 0;
    }
}
