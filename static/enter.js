// Get the form and input elements
const formName = document.getElementById('TabName');
const urlInputName = document.getElementById('TabName');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the value from the input field
    let url = urlInputName.value.trim();

    // Save the URL to local storage
    localStorage.setItem('TabText', url);

    // Clear the input field
    urlInput.value = '';
});

const formImage = document.getElementById('TabImage');
const urlInputImage = document.getElementById('TabImage');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the value from the input field
    let url = urlInputImage.value.trim();

    // Check if the URL starts with 'https://'
    if (!url.startsWith('https://')) {
        url = 'https://' + url; // Add 'https://' to the URL
    }

    // Save the URL to local storage
    localStorage.setItem('TabImage', url);

    // Clear the input field
    urlInput.value = '';
});
