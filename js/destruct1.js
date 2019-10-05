//1.배열 해체 할당.
// let a, b, c;
// [a, b, c=30] = [10,20]; //es6에서 새로나온 default parameter 문법
// console.log(a,b,c);

//2.객체 해체 할당.
let {a,b} = {a:10, b:20};
console.log(a,b);