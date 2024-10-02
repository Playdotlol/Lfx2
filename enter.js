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
    if (inputValue) {
        try {
            localStorage.setItem(storageKey, inputValue);
            helpFunction(); // Call the provided help function
        } catch (error) {
            console.error("Failed to save to local storage: ", error);
        }
        // Optionally, clear the input after saving
        input.value = '';
    }
}

function Help() {
    console.log("Help function for TabImage called.");
}

function Help1() {
    console.log("Help function for TabText called.");
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initInputHandlers);
