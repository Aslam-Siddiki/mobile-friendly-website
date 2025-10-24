// JS Code for Toggling the Sidebar
const bar = document.querySelector(".fa-bars");
const sideBar = document.querySelector(".side-bar");

bar.addEventListener("click", () => {
    // Toggles the 'hidden' class on the sidebar element
    sideBar.classList.toggle("hidden");
});

// Optional: Close the sidebar when a link is clicked (mobile experience)
const sidebarLinks = document.querySelectorAll(".sidebar-link");
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only close the sidebar if it's visible and we are on a small screen
        if (!sideBar.classList.contains('hidden') && window.innerWidth <= 640) {
            sideBar.classList.add('hidden');
        }
    });
});