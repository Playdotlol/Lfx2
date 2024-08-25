//function reloadEmbed(id) {
//    document.getElementById(id).src += '';
//    console.log("Reloaded")
//}
function reloadEmbed(id) {
  const iframe = document.getElementById(id);
  if (iframe) {
    iframe.src = iframe.src; // Reassign src to itself
    console.log("Reloaded");
  } else {
    console.error(`Iframe with id "${id}" not found...`);
  }
}