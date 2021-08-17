export function sortedKeys(obj) {
    return Object.keys(obj).sort((a, b) => a.length - b.length);
}

// export function getFilteredKey(obj) {
//     return Object.
// }

export function getArrayOfKeysAndValues(obj){
    return Object.entries(obj);
};
