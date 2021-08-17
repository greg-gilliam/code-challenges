import { sortedKeys, getFilteredKey, getArrayOfKeysAndValues, sortedArraysByValuesLength } from './codeChallenge03';

test('sorted keys', () => {
    const input = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] };
    const output = sortedKeys(input);
    expect(output).toEqual(['age', 'name', 'isDog', 'friends']);
});

test.skip('getFilteredKey', () => {
    const input = { name: 'Angelina Jolie', isSpot: false, age: 80, };
    const output = getFilteredKey(input);
    expect(output).toEqual(['age']);
});

test('getArrayOfKeysAndValues', () => {
    const input = { name: 'Angelina Jolie', age: 80 };
    const output = getArrayOfKeysAndValues(input);
    expect(output).toEqual([['name', 'Angelina Jolie'], ['age', 80]]);
});

test('sortedArraysByValuesLength', () => {
    const input = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' };
    const output = sortedArraysByValuesLength(input);
    expect(output).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]);
})


