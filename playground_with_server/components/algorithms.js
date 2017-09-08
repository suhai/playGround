// example.
const myHello = () => { return 'Hello World!' }
console.log(myHello());
// document.write(myHello()) ;
// document.write(`1 + 2 is equal to : ${1 + 2}`);

// 00.
const myAlgorithms = (arg) => {
    let node = document.createElement('li');
    node.innerHTML = arg;
    document.getElementById('myAlgos').appendChild(node);
}


// 01.
const myFactorial = (num) => {
    if (num <= 1) {
        return 1;
    } else {
        return num * myFactorial(num - 1);
    }
}
console.log(myFactorial(5));
// myAlgorithms(myFactorial(5));
// myAlgorithms(myFactorial(10));
// myAlgorithms(myFactorial(20));