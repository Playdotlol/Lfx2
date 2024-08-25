var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script); // Check https://jquery.com/ for the current version

function EnterKey2() {
  if (typeof $ === 'undefined') {
    console.error("jQuery is not loaded. Please include jQuery before this script.");
    return;
  }

  var input = document.getElementById('TextLocalStorage'); // Assuming there is an input element with id 'ImageLocalStorage'

  $(input).on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      var inputValue = $(this).val(); // Get the value of the input
      if (inputValue) {
        localStorage.setItem("TabText", inputValue);
        window.location.reload();
        console.log("hello")
      }
      // Optionally, you can clear the input after pressing Enter
      $(this).val('');
    }
  });
}