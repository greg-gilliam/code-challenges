export function fiveAndGreaterOnly(arr) {
    return arr.filter((num => num > 5));
}

export function evensOnly(arr) {
    return arr.filter((num => num % 2 === 0));
}

export function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(string => string.length <= 5)
}

export function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter((item) => {
        return item.member === true;
    })
}

export function ofAge(arr) {
    return arr.filter((item) => {
        return item.age > 18;
    })
}

export function leastToGreatest(arr) {
    return arr.sort((a, b) => a - b);
}

export function greatestToLeast(arr) {
    return arr.sort((a, b) => b - a);
}
