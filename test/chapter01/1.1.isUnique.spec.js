import chai from 'chai';
import * as funcs from '../../src/chapter01/1.1.isUnique.js';
const { expect } = chai;

for (let key in funcs) {
  let func = funcs[key];
  describe(`charpter01-1.1 ${key}`, function () {
    [
      'abcdefghi',
      'jklpoiuqwerzxcvmnsadf',
      '1234567890',
      'AsBbCcDdEeFfGg1234567890(*&^%$#@!)'
    ].forEach((arg) => {
      it(`returns true for unique string: '${arg}'`, function () {
        expect(func(arg.split(''))).to.be.true;
      });
    });
    [
      'abcadef',
      'aaaaaaaaa',
      'abcdefghijklmnopqstuvwxyza',
      '1234567890asdklf1',
      '!@#$%^^&*()_+12laskdjfekjsdfa(()()()())'
    ].forEach((arg) => {
      it(`returns false for string with duplicates: '${arg}'`, function () {
        expect(func(arg.split(''))).to.be.false;
      });
    });
  });
}
