// Menu Bar Functions
function homeButton() {
    window.location.href="/home.html";
}
function galleryButton() {
    window.location.href="/gallery.html";
}
function maintenanceButton() {
    window.location.href="/maintenance.html";
}
function specsButton() {
    window.location.href="/specs.html";
}
function manualButton () {
    window.location.href="/manual.html";
}

window.addEventListener("DOMContentLoaded", (event) => {
    const searchBar = document.getElementById("searchBar");
    searchBar.addEventListener('keydown', function(search) {
        if  (search.key == 'Enter') {
            console.log("Enter Key Pressed from Searchbar.")
        }
    });
});