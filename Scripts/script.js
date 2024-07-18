// function showTab(tabName) {
//     var i;
//     var contents = document.getElementsByClassName("content");
//     for (i = 0; i < contents.length; i++) {
//         contents[i].classList.remove("active");
//     }
//     document.getElementById(tabName).classList.add("active");
// }

// // Default to showing the 'All' tab
// document.addEventListener("DOMContentLoaded", function() {
//     showTab('all');
// });

// function showTab(tabName) {
//     // Get all elements with class="content" and hide them
//     var contents = document.getElementsByClassName('content');
//     for (var i = 0; i < contents.length; i++) {
//         contents[i].style.display = 'none';
//     }

//     // Get all elements with class="tab" and remove the class "active"
//     var tabs = document.getElementsByClassName('tab');
//     for (var i = 0; i < tabs.length; i++) {
//         tabs[i].classList.remove('active');
//     }

//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(tabName).style.display = 'block';
//     event.currentTarget.classList.add('active');
//     // document.getElementById(tabName).classList.add("active");
// }

// // Initial display setup: show 'all' tab content and set 'all' tab as active
// document.addEventListener('DOMContentLoaded', function() {
//     showTab('all');

// });

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

// Change the text after every three seconds.

document.addEventListener('DOMContentLoaded', function() {
    const changeText = document.querySelector('.change-text');
    const texts = ['QA', 'QC'];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % texts.length;
        changeText.textContent = texts[index];
    }, 3000);
});


// To display/hide the menu button while making the responsive 

document.getElementById('mobile-navbar-btn').addEventListener('click', function() {
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
