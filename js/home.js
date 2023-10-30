// Get the search button element
var searchBtn = document.getElementById('search-btn');

// Add a click event listener to the search button
searchBtn.addEventListener('click', function() {
    // Get the search keyword from the input field
    var keyword = document.getElementById('search').value;

    // Perform the search action
    performSearch(keyword);
});

// Function to perform the search action
function performSearch(keyword) {
    // Replace this with your actual search logic
    console.log("Performing search for keyword: " + keyword);
}