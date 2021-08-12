import { fiveAndGreaterOnly, evensOnly, fiveCharactersOrFewerOnly, peopleWhoBelongToTheIlluminati, ofAge, leastToGreatest, greatestToLeast, lengthSort, alphabetical, byAge } from './codeChallenge02.js';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

test('evensOnly', () => {
  const input = [3, 6, 8, 2];
  const output = evensOnly(input);
  expect(output).toEqual([6, 8, 2]);
});

test('five chars or fewer only', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']; // arrange
  const output = fiveCharactersOrFewerOnly(input); // act
  expect(output).toEqual(['dog', 'wolf', 'by', 'eaten']); // assert
});

test('peopleWhoBelongToTheIlluminati', () => {
  const input = [
    { name: 'Angelina Jolie', member: true },
    { name: 'Eric Jones', member: false },
    { name: 'Paris Hilton', member: true },
    { name: 'Kayne West', member: false },
    { name: 'Bob Ziroll', member: true }
  ];
  const output = peopleWhoBelongToTheIlluminati(input);
  expect(output).toEqual([
    { name: 'Angelina Jolie', member: true },
    { name: 'Paris Hilton', member: true },
    { name: 'Bob Ziroll', member: true }
  ]
  )
});

test('ofAge', () => {
  const input = [
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 }
  ];
  const output = ofAge(input);
  expect(output).toEqual([
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Bob Ziroll', age: 100 }
  ])
});

test('leastToGreatest', () => {
  const input = [1, 3, 5, 2, 90, 20];

  const output = leastToGreatest(input);
  expect(output).toEqual([1, 2, 3, 5, 20, 90])
});

test('greatestToLeast', () => {
  const input = [1, 3, 5, 2, 90, 20];

  const output = greatestToLeast(input);
  expect(output).toEqual([90, 20, 5, 3, 2, 1]);
})

test('lengthSort', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten'];

  const output = lengthSort(input);
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten', 'family']);
})

test('alphabetical', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten'];

  const output = alphabetical(input);
  expect(output).toEqual(['by', 'dog', 'eaten', 'family', 'wolf']);
})

test('byAge', () => {
  const input = [
    { name: 'Quiet Samurai', age: 22 },
    { name: 'Arrogant Ambassador', age: 100 },
    { name: 'Misunderstood Observer', age: 2 },
    { name: 'Unlucky Swami', age: 77 }
  ];

  const output = byAge(input);
  expect(output).toEqual([
    { name: 'Misunderstood Observer', age: 2 },
    { name: 'Quiet Samurai', age: 22 },
    { name: 'Unlucky Swami', age: 77 },
    { name: 'Arrogant Ambassador', age: 100 }
  ]);
})