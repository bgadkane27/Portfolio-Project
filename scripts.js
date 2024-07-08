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

function showTab(tabName) {
    // Get all elements with class="content" and hide them
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    // Get all elements with class="tab" and remove the class "active"
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// Initial display setup: show 'all' tab content and set 'all' tab as active
document.addEventListener('DOMContentLoaded', function() {
    showTab('all');
});


