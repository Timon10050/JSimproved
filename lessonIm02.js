const num = 266219;

let arr = String(num).split("");
let result = 1;

for (let i = 0; i < arr.length; i++) {
    result *= Number(arr[i]);
}

//console.log(result**3);

console.log(String(result ** 3).slice(0, 2));