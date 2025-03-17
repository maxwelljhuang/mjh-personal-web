// Basic JavaScript Variables
let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
    return x3;
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(fruitArray) {
    for (let i = 0; i < fruitArray.length; i++) {
        if (fruitArray[i] === "Banana") {
            alert("found the Banana in " + i);
            return;
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);

function findTheBananaForEach(fruitArray) {
    fruitArray.forEach(function(fruit, index) {
        if (fruit === "Banana") {
            alert("We found a banana in the array at index " + index);
        }
    });
}

findTheBananaForEach(L1);
findTheBananaForEach(L2);

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting;
    
    if (h < 12) {
        greeting = "Good morning";
    } else if (h < 18) {
        greeting = "Good afternoon";
    } else if (h < 20) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }
    
    console.log(greeting);
    
    if (window.location.href.indexOf("index.html") > -1 || window.location.href.endsWith('/')) {
        const headingElement = document.getElementById("greeting");
        if (headingElement) {
            headingElement.innerHTML = greeting + ", I am Maxwell!";
        }
    }
}

greetingFunc();