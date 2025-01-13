// Hamburger Menu Toggle
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
// assets/js/scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Script to toggle the navigation menu on smaller screens
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const resumeToggle = document.getElementById('resume-toggle');
const modal = document.getElementById('resume-modal');
const closeModal = document.querySelector('.close-modal');

resumeToggle.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal if clicked outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Chart 1 - Bar Chart
const ctx1 = document.getElementById('chart1').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Monthly Sales',
            data: [50,70 , 80, 90, 120, 150],
            backgroundColor: [
                '#1f3a6b', // Deep Blue
                '#4a6fa5', // Lighter Blue
                '#1f3a6b', // Deep Blue
                '#4a6fa5', // Lighter Blue
                '#1f3a6b', // Deep Blue
                '#4a6fa5'  // Lighter Blue
            ],
            borderColor: '#3a5b94', // Medium Blue
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Sales',
                font: { size: 16 }
            }
        }
    }
});

// Chart 2 - Line Chart
const ctx2 = document.getElementById('chart2').getContext('2d');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Weekly Visitors',
            data: [200, 450, 400, 500, 600, 700, 750],
            fill: false,
            borderColor: '#1f3a6b', // Deep Blue
            backgroundColor: '#4a6fa5', // Lighter Blue
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Weekly Visitors',
                font: { size: 16 }
            }
        }
    }
});

// Chart 3 - Pie Chart
const ctx3 = document.getElementById('chart3').getContext('2d');
new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Python', 'Excel', 'SQL', 'Others'],
        datasets: [{
            label: 'Skill Proficiency',
            data: [40, 25, 30, 5],
            backgroundColor: [
                '#1f3a6b', // Deep Blue
                '#4a6fa5', // Lighter Blue
                '#3a5b94', // Medium Blue
                '#1f3a6b'  // Deep Blue
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Skill Proficiency',
                font: { size: 16 }
            }
        }
    }
});
