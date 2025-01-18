// DOMContentLoaded to ensure the script runs after the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle for Mobile
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });
    // Function to close the sidebar
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

    // Close Sidebar when clicking outside
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            closeSidebar(); // Close sidebar after clicking a link (for mobile)
        });
    });

    // Resume Modal Functionality
    const resumeToggleDesktop = document.getElementById('resume-toggle');
    const resumeToggleMobile = document.getElementById('resume-toggle-mobile');
    const modal = document.getElementById('resume-modal');
    const closeModal = document.querySelector('.close-modal');

    // Open Resume Modal (Desktop)
    if (resumeToggleDesktop) {
        resumeToggleDesktop.addEventListener('click', function (e) {
            e.preventDefault();
            openResumeModal();
        });
    }

    // Open Resume Modal (Mobile)
    if (resumeToggleMobile) {
        resumeToggleMobile.addEventListener('click', function (e) {
            e.preventDefault();
            openResumeModal();
        });
    }

    // Close Resume Modal
    closeModal.addEventListener('click', function () {
        closeResumeModal();
    });

    // Close modal if clicked outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeResumeModal();
        }
    });

    // Function to open the resume modal
    function openResumeModal() {
        modal.style.display = 'block';
        document.body.classList.add('no-scroll'); // Disable scrolling
    }

    // Function to close the resume modal
    function closeResumeModal() {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll'); // Enable scrolling
    }

    // Chart 1 - Bar Chart
    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Monthly Sales',
                data: [50, 70, 80, 90, 120, 150],
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
});
