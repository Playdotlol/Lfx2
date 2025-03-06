function goBack(id) {
  // Target the iframe directly
  document.getElementById(id).contentWindow.history.back(); 
  console.log("Went Back")
}