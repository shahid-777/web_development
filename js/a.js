// JavaScript File: script.js
const button = document.getElementById('color-btn');
const card = document.querySelector('.card');

// Event Listener: Jab user click karega
button.addEventListener('click', function() {
  // Card ka background color badal jayega (DOM Manipulation)
  card.style.backgroundColor = '#e3f2fd'; 
  alert('Theme Changed Successfully!'); // Feedback to user
});