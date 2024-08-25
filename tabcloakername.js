//function Help1() {
 // var x = localStorage.getItem("TabText");
 //       let document = document.createElement('link');
 //       document.title = 'Hello!'; // New title :)
///
 //       // remove any existing favicon
  //      var existingLink = document.querySelector('document[rel="title"]');
 //       if (existingLink) {
  //          document.head.removeChild(existingLink);
  //      }
//
  //      // add the new favicon
   //     document.head.appendChild(document);
  //      console.log("helllp")
   // }
function Help1() {
  var x = localStorage.getItem("TabText");
    document.title = x; // New title :)
    console.log("hello")

    // Remove any existing favicon
    var existingLink = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
    if (existingLink) {
        document.head.removeChild(existingLink);
    }
}