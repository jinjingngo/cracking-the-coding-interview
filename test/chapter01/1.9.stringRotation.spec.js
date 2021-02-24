import chai from 'chai';
import * as funcs from '../../src/chapter01/1.9.stringRotation.js';
const { expect } = chai;

for (let key in funcs) {
  const func = funcs[key];

  describe(`chapter01-1.9 ${key}`, function () {
    it('returns false when either string is null/undefined/empty', function () {
      expect(func('', '')).to.be.false;
      expect(func(null, '')).to.be.false;
      expect(func(undefined, '')).to.be.false;
      expect(func('abc', '')).to.be.false;
    });

    it('return false when strings are different lengths', function () {
      expect(func('abc', 'bcad')).to.be.false;
      expect(func('abcd', 'bcdaa')).to.be.false;
    });

    describe('rotations of a long string', function () {
      const str = 'a b c d e f g h i j k l m n o p q r s t u v x y z 0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
      const reverseStr = str.split('').reverse().join('');

      for (let i = 1; i < str.length; i += 12) {
        const rStr = str.substring(i) + str.substring(0, i);
        it(`returns true for rotated string ${rStr}`, function () {
          expect(func(rStr, str)).to.be.true;
        });
      }

      for (let i = 1; i < str.length; i += 12) {
        const rStr = str.substring(i) + reverseStr.substring(0, i);
        it(`returns false for non-rotated string ${rStr}`, function () {
          expect(func(rStr, str)).to.be.false;
        });
      }
    });
  });
}