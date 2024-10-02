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

    button.addEventListener('click', function () {
        var inputValue = input.value.trim(); // Get the value of the input and trim whitespace
        if (inputValue) {
            try {
                localStorage.setItem(storageKey, inputValue);
                helpFunction(); // Call the provided help function
            } catch (error) {
                console.error("Failed to save to local storage: ", error);
            }
        }
        // Optionally, clear the input after saving
        input.value = '';
    });
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initInputHandlers);
