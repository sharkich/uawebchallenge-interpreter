import {it} from 'angular2/testing';

import {Operation} from './operation';
import {Token} from '../token/token';

describe('Operation', () => {

    it('should isOperation with "(666)"', () => {
        const TOKENS = [
            new Token('('),
            new Token('666'),
            new Token(')')
        ];
        let operation = new Operation(TOKENS);
        expect(operation.kind).toEqual('equal');
        expect(operation.operators).toEqual([
            new Token('666'),
        ]);
    });

    // it('should isOperation with "(+ 2 3)"', () => {
    //     const TOKENS = [
    //         new Token('('),
    //         new Token('+'),
    //         new Token('2'),
    //         new Token('3'),
    //         new Token(')')
    //     ];
    //     let operation = new Operation(TOKENS);
    //     expect(operation.kind).toEqual('plus');
    //     expect(operation.operators).toEqual([
    //         new Token('2'),
    //         new Token('3'),
    //     ]);
    // });

});
