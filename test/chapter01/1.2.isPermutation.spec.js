import chai from 'chai';
import * as funcs from '../.././src/chapter01/1.2.isPermutation.js';
const { expect } = chai;

for (let key in funcs) {
  const func = funcs[key];
  describe(`chapter01-1.2 ${key}`, function () {
    [
      [ 'abcdefghi', 'ihgfedcba' ],
      [ '1a1', '1a1' ],
      [ '1234567812345678', '8877665544332211' ],
      [ 'icarraci', 'carcarii' ]
    ].forEach(args => {
      it(`returns true for string that are permutation '${args[0]}' & '${args[1]}'`, function () {
        expect(func(args[0].split(''), args[1].split(''))).to.be.true;
      });
    });
  });
}
