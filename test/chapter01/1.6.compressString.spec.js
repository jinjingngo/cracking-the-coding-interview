import chai from 'chai';
import * as funcs from '../../src/chapter01/1.6.compressString.js';
const { expect } = chai;

for (let key in funcs) {
  const func = funcs[key];
  describe(`chapter01.1.6 ${key}`, function () {
    it('it returns input where null/undefined', function () {
      expect(func(null)).to.be.null;
      expect(func(undefined)).to.be.undefined;
    });

    it('returns input where empty string', function () {
      expect(func('')).to.equal('');
    });

    ['a', 'aa', 'abc', 'aabbcc', 'ababababccab'].forEach((arg) => {
      it(`returns input string where compression doesn't use less space: '${arg}`, function () {
        expect(func(arg)).to.eql(arg);
      });
    });

    [
      { arg: 'aaa', out: '3a' },
      { arg: 'bbbbbb', out: '6b' },
      { arg: 'abbbbbbc', out: '1a6b1c' },
      { arg: 'aaabccc', out: '3a1b3c' },
      { arg: 'hhellllllllooooo!', out: '2h1e8l5o1!' },
      { arg: 'woorrrllllddddd', out: '1w2o3r4l5d' }
    ].forEach(({ arg, out }) => {
      it(`returns ${out} with string ${arg}`, function () {
        expect(func(arg)).to.equal(out);
      });
    });
  });
}
