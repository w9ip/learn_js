"use strict";

function show_primes(n) {
    for (let i = 2; i < n; i++) {
        if (!is_prime(i)) continue;
        console.log(i);
    }
}

function is_prime(n) {
    for (let i=2; i<n; i++) {
        if (n%i==0) return false;
    }
    return true;
}

show_primes(10);  // 2 3 5 7
