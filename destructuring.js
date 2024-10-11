const actor = {
    name: 'ananta',
    age: 30,
    phone: 01713344432,
    money: 12334445555,
}
// if right side is an object,left side of destructurinf will be object as well
// use property name as a variable that contains the property value
const {phone, age: boyos} = actor

// const.phone = actor.phone;
// const.name= actor.phone;
// const.age = actor.phone;

console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
 console.log(boyos)


// array destructuring.
const numbers = [45, 99]
const [first, second] = numbers;
const [x, y] = [12, 66];

// advanced
function doubleThem(a, b){
    return [a*2, b*2]
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);
