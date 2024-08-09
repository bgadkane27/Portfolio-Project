
var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if (link.classList.contains('small')) {
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});

function showTab(tab) {
    // Hide all tab content except the selected one
    document.querySelectorAll('.tab-content .content').forEach(function (content) {
        content.style.display = content.id === tab ? 'block' : 'none';
    });

    // Remove 'active' class from all tabs
    document.querySelectorAll('.tabs .tab').forEach(function (tabElement) {
        tabElement.classList.remove('active');
    });

    // Add 'active' class to the selected tab
    document.querySelector('.tabs .tab[onclick="showTab(\'' + tab + '\')"]').classList.add('active');

    // Reinitialize AOS
    AOS.refresh();
}

// Show all content by default
document.addEventListener('DOMContentLoaded', function () {
    showTab('all');
});


// To display/hide the menu button while making the responsive 

document.getElementById('mobile-navbar-btn').addEventListener('click', function () {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');

    const menuIcon = document.querySelector('ion-icon[name="menu-outline"]');
    const closeIcon = document.querySelector('ion-icon[name="close-outline"]');

    if (navbar.classList.contains('open')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});
// End Here

// To change the designation text

var typed = new Typed(".auto", {
    strings: ["QA Engineer", 'QC Engineer', 'Designer'],
    loop: true,
    typeSpeed: 120,
    backSpeed: 120,
    backDelay: 1000,
});