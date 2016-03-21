import {it} from 'angular2/testing';

import {Parser} from './parser';
import {Token} from './token/token';
import {Operation} from './operation/operation';

describe('Parser', () => {

    it('should inputString with "(666)"', () => {
        const STR = `(666)`;
        const TOKENS = [
            new Token('('),
            new Token('666'),
            new Token(')')
        ];
        let parser = new Parser(STR);
        expect(parser.inputString).toEqual(STR);
        expect(parser.tokens).toEqual(TOKENS);
        // todo
        // expect(parser.tree).toEqual(new Operation(TOKENS));
    });

    it('should inputString with "(+ 1 2)"', () => {
        const STR = `(+ 1 2)`;
        let parser = new Parser(STR);
        expect(parser.inputString).toEqual(STR);
        expect(parser.tokens).toEqual([
            new Token('('),
            new Token('+'),
            new Token('1'),
            new Token('2'),
            new Token(')')
        ]);
    });

    it('should inputString with "(+ 33 (* 4 5))"', () => {
        const STR = ` ( + 33    (* 
        4 \n 5) \t)   `;
        let parser = new Parser(STR);
        expect(parser.inputString).toEqual(STR);
        expect(parser.tokens).toEqual([
            new Token('('),
            new Token('+'),
            new Token('33'),
            new Token('('),
            new Token('*'),
            new Token('4'),
            new Token('5'),
            new Token(')'),
            new Token(')')
        ]);
    });

    // it('should parse with "(+ 3 (* 4 5))"', () => {
    //     let parser = new Parser('(+ 3 (* 4 5))');
    //     expect(parser.token).toEqual([
    //        
    //     ]);
    // });
    
    // it('should parse pare with error syntax', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('())')).toThrow();
    // }));
    //
    // it('should parse pare with error syntax', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('(+3)')).toThrow();
    // }));
    //
    // it('should parse pare with number', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('(3)')).toEqual([
    //         {
    //             type: 'number',
    //             value: 3
    //         }
    //     ]);
    // }));
    //
    // it('should parse pare with some string', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('("some string")')).toEqual([
    //         {
    //             type: 'string',
    //             value: 'some string'
    //         }
    //     ]);
    // }));
    //
    // it('should parse pare with some string 2', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('(\'some string 2\')')).toEqual([
    //         {
    //             type: 'string',
    //             value: 'some string 2'
    //         }
    //     ]);
    // }));
    //
    //
    // it('should parse pare with plus (+ 1 2)', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('(+ 1 2)')).toEqual([
    //         {
    //             operation: 'plus',
    //             operands: [
    //                 {
    //                     type: 'number',
    //                     value: 1
    //                 },
    //                 {
    //                     type: 'number',
    //                     value: 2
    //                 }
    //             ]
    //         }
    //     ]);
    // }));
    //
    // it('should parse pare with plus (+ 1 2 3)', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('(+ 1 2 3)')).toEqual([
    //         {
    //             operation: 'plus',
    //             operands: [
    //                 {
    //                     type: 'number',
    //                     value: 1
    //                 },
    //                 {
    //                     type: 'number',
    //                     value: 2
    //                 },
    //                 {
    //                     type: 'number',
    //                     value: 3
    //                 }
    //             ]
    //         }
    //     ]);
    // }));
    //
    // it('should parse pare with plus (+ 1 2 3 "4" 5)', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('(+ 1 2 3 "4" 5)')).toThrow();
    // }));
    //
    // it('should parse pare with plus (+ 1 (2))', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('(+ 1 (2))')).toEqual([
    //         {
    //             operation: 'plus',
    //             operands: [
    //                 {
    //                     type: 'number',
    //                     value: 1
    //                 },
    //                 {
    //                     operation: 'equal',
    //                     operands: [
    //                         {
    //                             type: 'number',
    //                             value: 2
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ]);
    // }));
    //
    // it('should parse pare with plus (- 2 1)', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('(- 2 1)')).toEqual([
    //         {
    //             operation: 'minus',
    //             operands: [
    //                 {
    //                     type: 'number',
    //                     value: 1
    //                 },
    //                 {
    //                     type: 'number',
    //                     value: 2
    //                 }
    //             ]
    //         }
    //     ]);
    // }));
    //
    // it('should parse pare with plus (- 1 2)', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('(- 1 2)')).toEqual([
    //         {
    //             operation: 'minus',
    //             operands: [
    //                 {
    //                     type: 'number',
    //                     value: 2
    //                 },
    //                 {
    //                     type: 'number',
    //                     value: 1
    //                 }
    //             ]
    //         }
    //     ]);
    // }));
    //
    // it('should parse pare with plus (* 2 3)', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('(* 2 3)')).toEqual([
    //         {
    //             operation: 'multi',
    //             operands: [
    //                 {
    //                     type: 'number',
    //                     value: 2
    //                 },
    //                 {
    //                     type: 'number',
    //                     value: 3
    //                 }
    //             ]
    //         }
    //     ]);
    // }));
    //
    // it('should parse pare with plus (/ 6 3)', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('(/ 6 3)')).toEqual([
    //         {
    //             operation: 'div',
    //             operands: [
    //                 {
    //                     type: 'number',
    //                     value: 6
    //                 },
    //                 {
    //                     type: 'number',
    //                     value: 3
    //                 }
    //             ]
    //         }
    //     ]);
    // }));
    //
    // it('should parse pare with plus (+ 2 (* 3 4) 5)', inject([ Syntax ], (syntax) => {
    //     expect(syntax.parse('(/ 6 3)')).toEqual([
    //         {
    //             operation: 'plus',
    //             operands: [
    //                 {
    //                     type: 'number',
    //                     value: 6
    //                 },
    //                 {
    //                     operation: 'multi',
    //                     operands: [
    //                         {
    //                             type: 'number',
    //                             value: 3
    //                         },
    //                         {
    //                             type: 'number',
    //                             value: 4
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     type: 'number',
    //                     value: 5
    //                 }
    //             ]
    //         }
    //     ]);
    // }));

});
