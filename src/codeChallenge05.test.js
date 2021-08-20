import { howMuchPencil, wordsToCharList, removeLastCharacters } from './codeChallenge05';

test('It should return a list of shortening words', () => {
    expect(howMuchPencil('Welcome')).toStrictEqual(['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']);
    expect(howMuchPencil('Welcome').length).toStrictEqual(8);
    expect(howMuchPencil('')).toStrictEqual(['']);
    expect(howMuchPencil('abc')).toStrictEqual(['abc', 'bc', 'c', '']);
  });

test('wordsToCharList', () => {
  expect(wordsToCharList('Gregor')).toStrictEqual(['G', 'r', 'e', 'g', 'o', 'r']);
  expect(wordsToCharList('Gregor').length).toStrictEqual(6);
  expect(wordsToCharList('')).toStrictEqual([]);
  expect(wordsToCharList('abc')).toStrictEqual(['a','b', 'c']);
});

test('removeLastCharacters', () => {
  const output = removeLastCharacters('wowow', -700);
  expect(output).toEqual('wowow'); 
});
