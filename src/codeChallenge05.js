export function howMuchPencil(str) {
    const arr = [];
    for(let i = -1; i < str.length; i++) {
        arr.push(str.slice(i + 1));
    }
    return arr;
};