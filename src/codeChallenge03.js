export function sortedKeys(obj) {
    return Object.keys(obj).sort((a, b) => a.length - b.length);
}
