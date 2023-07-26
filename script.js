// script.js

// Get the elements
const signinBtn = document.getElementById('signin-btn');
const signinPopup = document.getElementById('signin-popup');

// Function to show the popup
function showPopup() {
  signinPopup.style.display = 'block';
}

// Function to hide the popup
function closePopup() {
  signinPopup.style.display = 'none';
}

// Add event listeners
signinBtn.addEventListener('click', showPopup);

