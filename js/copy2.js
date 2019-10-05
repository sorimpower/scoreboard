let book = {title: "인사이드 자바스크립트", price: 18000};

// 2. book을 카피하되 deep copy를 수행한 후에 price를 30000으로 바꾸고 출력하라. 두개의 값이 달라야 한다.
// 2-2 es6 spread 연산자를 사용하여 deep copy 하기
const copyBook = { ...book, ...{name : "aaa"}};
copyBook.price = 20000;
console.log(book);
console.log(copyBook);