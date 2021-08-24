import { returnTen, findMax, totalSum } from './codeChallenge06';

test('it should return the last 10 characters of a string as an array', () => {
  expect(returnTen('hello world')).toStrictEqual(['e','l','l','o',' ','w','o','r','l','d']);
  expect(returnTen('world')).toStrictEqual(['w','o','r','l','d']);
});

console.log(findMax, totalSum)


