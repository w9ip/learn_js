"use strict";

let a, b, c = 10,
    d = 10;
console.log(a, b, c, d);
a = c++;  // <1>
b = ++d;  // <2>
console.log(a, b, c, d);  // 10 11 11 11
