"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {

  const url = search(address.value, searchEngine.value);
  const encodedUrl = __uv$config.prefix + __uv$config.encodeUrl(url);
  localStorage.setItem("url", `${encodeURIComponent(encodedUrl)}`);
  window.location.href = `/static/reading/`;
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
function search(value, searchEngine) {
  let url = value.trim();
  if (url.includes(" ")) {
    // If there are spaces, treat it as a search query
    url = searchEngine.replace('%s', encodeURIComponent(url));
  } else if (!isUrl(url)) {
    url = searchEngine.replace('%s', encodeURIComponent(url));
  } else if (!(url.startsWith("https://") || url.startsWith("http://"))) {
    url = "http://" + url;
  }
  return url;
}
function isUrl(val = "") {
  // Check for valid URLs without spaces
  return /^http(s?):\/\//.test(val) || (val.includes(".") && !val.includes(" ") && val.slice(0, 1) !== " ");
}
