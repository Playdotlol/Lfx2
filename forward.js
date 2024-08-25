function goForward(id) {
  // Target the iframe directly
  document.getElementById(id).contentWindow.history.forward(); 
  console.log("Went Forward")
}