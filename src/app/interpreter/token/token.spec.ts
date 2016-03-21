import {it} from 'angular2/testing';

import {Token} from './token';

describe('Token', () => {

    it('should isOperation with "+"', () => {
        let token = new Token('+');
        expect(token.isOperation).toBeTruthy();
        expect(token.kind).toEqual('operation');
    });
    it('should isOperation with "-"', () => {
        let token = new Token('-');
        expect(token.isOperation).toBeTruthy();
        expect(token.kind).toEqual('operation');
    });
    it('should isOperation with "*"', () => {
        let token = new Token('*');
        expect(token.isOperation).toBeTruthy();
        expect(token.kind).toEqual('operation');
    });
    it('should isOperation with "/"', () => {
        let token = new Token('/');
        expect(token.isOperation).toBeTruthy();
        expect(token.kind).toEqual('operation');
    });
    it('should isOperation with "print"', () => {
        let token = new Token('print');
        expect(token.isOperation).toBeTruthy();
        expect(token.kind).toEqual('operation');
    });
    it('should isOperation with "if"', () => {
        let token = new Token('if');
        expect(token.isOperation).toBeTruthy();
        expect(token.kind).toEqual('operation');
    });
    it('should isOperation with "define"', () => {
        let token = new Token('define');
        expect(token.isOperation).toBeTruthy();
        expect(token.kind).toEqual('operation');
    });
    it('should NOT isOperation with "printf"', () => {
        let token = new Token('printf');
        expect(token.isOperation).toBeFalsy();
        expect(token.kind).toEqual('data');
    });

    it('should isNumber with "123"', () => {
        let token = new Token('123');
        expect(token.isNumber).toBeTruthy();
        expect(token.isOperation).toBeFalsy();
        expect(token.kind).toEqual('data');
    });
    it('should isNumber with "123.12"', () => {
        let token = new Token('123.12');
        expect(token.isNumber).toBeTruthy();
        expect(token.isOperation).toBeFalsy();
        expect(token.kind).toEqual('data');
    });
    it('should NOT isNumber with "123a"', () => {
        let token = new Token('123a');
        expect(token.isNumber).toBeFalsy();
        expect(token.isOperation).toBeFalsy();
        expect(token.kind).toEqual('data');
    });
    it('should NOT isNumber with "123.12.12"', () => {
        let token = new Token('123.12.12');
        expect(token.isNumber).toBeFalsy();
        expect(token.isOperation).toBeFalsy();
        expect(token.kind).toEqual('data');
    });
    it('should NOT isNumber with "a123"', () => {
        let token = new Token('a123');
        expect(token.isNumber).toBeFalsy();
        expect(token.isOperation).toBeFalsy();
        expect(token.kind).toEqual('data');
    });

    it('should isBrace with "("', () => {
        let token = new Token('(');
        expect(token.isBrace).toBeTruthy();
        expect(token.isOpenBrace).toBeTruthy();
        expect(token.isNumber).toBeFalsy();
        expect(token.isOperation).toBeFalsy();
        expect(token.kind).toEqual(null);
    });
    it('should isBrace with ")"', () => {
        let token = new Token(')');
        expect(token.isBrace).toBeTruthy();
        expect(token.isCloseBrace).toBeTruthy();
        expect(token.isNumber).toBeFalsy();
        expect(token.isOperation).toBeFalsy();
        expect(token.kind).toEqual(null);
    });

});
