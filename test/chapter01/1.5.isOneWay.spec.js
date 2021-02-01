import chai from 'chai';
import * as funcs from '../../src/chapter01/1.5.isOneWay.js';
const { expect } = chai;

for (let key in funcs) {
  const func = funcs[key];

  describe(`chapter01-1.5 ${key}`, function () {
    it('returns true for the same string', function () {
      let str = 'abcdef';
      expect(func(str, str)).to.be.true;
      str = 'a1b2c3d4';
      expect(func(str, str)).to.be.true;
    });

    [
      ['pale', 'ple'],
      ['pales', 'pale'],
      ['pale', 'bale'],
      ['pale', 'pxle'],
      ['pale', 'pate'],
      ['pale', 'pald'],
      ['answers', 'answer'],
      ['technology', 'etechnology']
    ].forEach((args) => {
      it(`returns true for strings that are one edit: '${args[0]}' & '${args[1]}'`, function () {
        expect(func(args[0], args[1])).to.be.true;
      });
    });

    [
      ['pale', 'pl'],
      ['paless', 'pale'],
      ['pale', 'bales'],
      ['abcdefghiz', 'ihgfedcbaa'],
      ['1122334455667788', '9911223344556677'],
      ['45678', '1239'],
      ['abcd', 'dcba']
    ].forEach((args) => {
      it(`returns false for string that are more than one edit: '${args[0]}' & '${args[1]}'`, function () {
        expect(func(args[0], args[1])).to.be.false;
      });
    });
  });
}
