const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true
};

console.log(glass);
// all properties name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
// console.log(keys);

// all property values
const values = Object.values(glass);
[ 'glass', 'golden', 12, true ]
// console.log(values);

// array of array, two dimensional array
const entries = Object.entries(glass);
// [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 12 ],
//   [ 'isCleaned', true ]
// console.log(entries);

//  for delete any property from Object
// delete glass.isCleaned;
// console.log(glass);

//  without iscleaned
const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

// freeze
 Object.freeze(glass);
 glass.source = 'Bangladesh';
 glass.price = 5000;
 delete glass.name;
//  console.log(glass);

//   seal
Object.seal(glass);
 glass.source = 'Bangladesh';
 glass.price = 5000;
 delete glass.name;
 console.log(glass);