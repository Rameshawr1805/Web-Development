/* let n=5;

for (let i=0; i<n; i++) {
    console.log("hello world");
} */ 


/*From require 
const math = require("./math");

console.log(math.sum(3,2));
console.log(math.mul(3,2));*/ 

import {sum, mul} from "./math.js";

console.log(sum(3,2));
console.log(mul(3,2));
