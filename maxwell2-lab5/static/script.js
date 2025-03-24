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

function addYear() {
    const currentYear = new Date().getFullYear();
    const copyYearElement = document.getElementById("copyYear");
    if (copyYearElement) {
        copyYearElement.textContent = currentYear;
    }
}

/*
function showList() {
    const activityList = document.querySelector('.main ul');
    const button = document.querySelector('.main button');
    
    if (activityList) {
        activityList.style.display = 'block';
    }
    
    if (button) {
        button.style.display = 'none';
    }
}
*/

function validateForm(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');
    let isValid = true;
    
    if (!nameInput.checkValidity()) {
        document.getElementById('nameError').textContent = 'Please enter your name';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }
    
    if (!emailInput.checkValidity()) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }
    
    if (!commentInput.checkValidity()) {
        document.getElementById('commentError').textContent = 'Please enter a comment';
        isValid = false;
    } else {
        document.getElementById('commentError').textContent = '';
    }
    
    if (isValid) {
        alert('Form submitted successfully!');
    }
    
    return isValid;
}

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('adviceText').innerText = data.slip.advice;
        })
        .catch(error => {
            document.getElementById('adviceText').innerText = 'Failed to get advice. Please try again.';
            console.error('Error fetching advice:', error);
        });
}

function fetchLatestCMUVideo() {
    const cmuChannelId = 'UCsUF5_x8KZXjqVYLLSoSyZw'; 
    const iframeContainer = document.getElementById('latestVideoContainer');
    
    if (iframeContainer) {
        iframeContainer.innerHTML = `
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed?listType=user_uploads&list=cmu" 
                title="Latest CMU YouTube Video" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
            <p>Latest video from CMU's YouTube channel</p>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery !== 'undefined') {
        jQuery(document).ready(function($) {
            $('#extendedBio').hide();
            
            $('#readMoreBtn').on('click', function() {
                $('#shortBio').hide();
                $('#extendedBio').show();
                $(this).hide();
                $('#readLessBtn').show();
            });
            
            $('#readLessBtn').on('click', function() {
                $('#extendedBio').hide();
                $('#shortBio').show();
                $(this).hide();
                $('#readMoreBtn').show();
            });
            
            $('#readLessBtn').hide();
        });
    }

    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
    
    greetingFunc();
});