import {it} from 'angular2/testing';

import {Operation} from './operation';
import {Token} from '../token/token';

describe('Operation', () => {

    it('should calculate with "(666)"', () => {
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
        expect(operation.result).toEqual(666);
    });

    it('should calculate with "(+ 2 3)"', () => {
        const TOKENS = [
            new Token('('),
            new Token('+'),
            new Token('2'),
            new Token('3'),
            new Token(')')
        ];
        let operation = new Operation(TOKENS);
        expect(operation.kind).toEqual('plus');
        expect(operation.operators).toEqual([
            new Token('2'),
            new Token('3'),
        ]);
        expect(operation.result).toEqual(5);
    });

    it('should calculate with "(- 3 2)"', () => {
        const TOKENS = [
            new Token('('),
            new Token('-'),
            new Token('3'),
            new Token('2'),
            new Token(')')
        ];
        let operation = new Operation(TOKENS);
        expect(operation.kind).toEqual('minus');
        expect(operation.operators).toEqual([
            new Token('3'),
            new Token('2'),
        ]);
        expect(operation.result).toEqual(1);
    });

    it('should calculate with "(* 3 2)"', () => {
        const TOKENS = [
            new Token('('),
            new Token('*'),
            new Token('3'),
            new Token('2'),
            new Token(')')
        ];
        let operation = new Operation(TOKENS);
        expect(operation.kind).toEqual('multi');
        expect(operation.operators).toEqual([
            new Token('3'),
            new Token('2'),
        ]);
        expect(operation.result).toEqual(6);
    });

    it('should calculate with "(/ 6 2)"', () => {
        const TOKENS = [
            new Token('('),
            new Token('/'),
            new Token('6'),
            new Token('2'),
            new Token(')')
        ];
        let operation = new Operation(TOKENS);
        expect(operation.kind).toEqual('div');
        expect(operation.operators).toEqual([
            new Token('6'),
            new Token('2'),
        ]);
        expect(operation.result).toEqual(3);
    });

});
