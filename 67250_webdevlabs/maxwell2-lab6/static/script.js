function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        if (currentPath.endsWith(linkPath) || 
            (currentPath.endsWith('/') && linkPath === 'index.html') ||
            (currentPath.includes('index.html') && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

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

document.addEventListener('DOMContentLoaded', function() {
    // Initialize menu icon click handler
    const menuIcon = document.getElementById('menuIcon');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
    
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
    
    highlightActiveLink();
});