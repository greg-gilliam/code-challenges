export function doubleNumbers(arr){
    return arr.map((num => num * 2));
}

export function stringItUp(arr){
    return arr.map((num) => {
        const string = num + '';
        return string; 
    });
}

export function capitalizeNames(arr) {
    return arr.map((item) => {
        const nameDown = item.toLowerCase();
        const nameUp = nameDown.charAt(0).toUpperCase() + nameDown.slice(1);
        return nameUp;
    })
}

export function namesOnly(arr) {
    return arr.map((item) => {
        return item.name;
    })
}

export function makeStrings(arr) {
    return arr.map((arr) => {
        if(arr.age >= 18) {
        return arr.name + " can go to The Matrix";
        } return arr.name + " is under age!!";
    })
}