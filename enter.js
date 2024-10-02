function initInputHandlers() {
    setupInputHandler('ImageLocalStorage', 'TabImage', Help, 'ImageLocalStorage');
    setupInputHandler('TextLocalStorage', 'TabText', Help1, 'TextLocalStorage');
}

function setupInputHandler(inputId, storageKey, helpFunction, buttonId) {
    var input = document.getElementById(inputId);
    var button = document.getElementById(buttonId);

    if (!input || !button) {
        console.error(`Element with ID ${!input ? inputId : buttonId} not found.`);
        return;
    }

    // Add click event listener for the button
    button.addEventListener('click', function () {
        saveToLocalStorage(input, storageKey, helpFunction);
    });

    // Add keyup event listener for the input (to handle Enter key)
    input.addEventListener('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            saveToLocalStorage(input, storageKey, helpFunction);
        }
    });
}

// Function to save the input value to local storage
function saveToLocalStorage(input, storageKey, helpFunction) {
    var inputValue = input.value.trim(); // Get the value of the input and trim whitespace
    var inputValuehttp = inputValue; // Initialize inputValuehttp to inputValue

    // Check if inputValue needs to be modified
    if (inputValue && !inputValue.startsWith('https://')) {
        if (!inputValue.includes('/images/')) {
            inputValuehttp = 'https://' + inputValue; // Prepend https:// if it doesn't start with http or https and is not an image path
        }
    }

    if (inputValuehttp) {
        try {
            localStorage.setItem(storageKey, inputValuehttp);
            helpFunction(); // Call the provided help function
            updateFavicon(inputValuehttp); // Update the favicon with the new URL
        } catch (error) {
            console.error("Failed to save to local storage: ", error);
        }
        // Optionally, clear the input after saving
        input.value = '';
    }
}

// Function to update the favicon
function updateFavicon(url) {
    var faviconLink = document.getElementById('favicon');
    faviconLink.href = url; // Set the href of the favicon link to the new URL
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initInputHandlers);

    // Check if inputValue needs to be modified
    if (inputValue && !inputValue.startsWith('https://')) {
        if (!inputValue.includes('/images/')) {
            const inputValuehttp = 'https://' + inputValue; // Prepend http:// if it doesn't start with http or https and is not an image path
        }
    }

    if (inputValuehttp) {
        try {
            localStorage.setItem(storageKey, inputValuehttp);
            helpFunction(); // Call the provided help function
            updateFavicon(inputValue); // Update the favicon with the new URL
        } catch (error) {
            console.error("Failed to save to local storage: ", error);
        }
        // Optionally, clear the input after saving
        input.value = '';
    }
}

// Function to update the favicon
function updateFavicon(url) {
    var faviconLink = document.getElementById('favicon');
    faviconLink.href = url; // Set the href of the favicon link to the new URL
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initInputHandlers);
