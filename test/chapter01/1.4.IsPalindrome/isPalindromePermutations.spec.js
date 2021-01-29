import chai from 'chai';
import * as funcs from '../../../src/chapter01/1.4.IsPalindrome/isPalindromePermutations.js';
const { expect } = chai;

for (let key in funcs) {
    const func = funcs[key];
    describe(`chapter01-1.4 ${key}`, function () {
        it('returns false with null/undefined as input', function () {
            expect(func(null)).to.be.false;
            expect(func(undefined)).to.be.false;
        });

        it('returns true for an empty array', function () {
            expect(func([])).to.be.true;
        });

        [
            ' ',
            '   ',
            'aabb',
            'ab a b',
            'sasadfgsadfghjk;hjk;sadfghjk;dfghjk;',
            'sa sadfgsadfgh jk;hjkz;sadfg hjk;dfghjk;'
        ].forEach(arg => {
            it(`returns true for palindromic string: '${arg}'`, function () {
                expect(func(arg.split(''))).to.be.true;
            });
        });
        
        [
            'abcdadef',
            '1234567890',
            'a b'
        ].forEach(arg => {
            it(`returns false for non-palindromic string: '${arg}'`, function () {
                expect(func(arg.split(''))).to.be.false;
            });
        });
    });
}