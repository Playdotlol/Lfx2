"use strict";

// Service Worker Registration
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/l2x/uv-sw.js")
    .then(() => {
      console.log("Service Worker Registered Successfully");
    })
    .catch((err) => {
      console.error("Failed to register Service Worker:", err);
    });
} else {
  console.warn("Service Worker not supported in this browser.");
}

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
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    errorCode.textContent = err.toString();
    error.textContent = "Failed to register service worker.";
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  const encodedUrl = __uv$config.prefix + __uv$config.encodeUrl(url);
  localStorage.setItem("url", `${encodeURIComponent(encodedUrl)}`);
  window.location.href = `/tabs.html`;
});

async function launchURL(openURL) {
  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(openURL, searchEngine.value);
  localStorage.setItem("url", `${encodeURIComponent(encodedUrl)}`);
  window.location.href = `/tabs.html`;
}


async function launchGame(openURL) {
  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(openURL, searchEngine.value);
  const encodedUrl = __uv$config.prefix + __uv$config.encodeUrl(url);
  localStorage.setItem("url", `${encodeURIComponent(encodedUrl)}`);
  window.location.href = `/tabs.html`;
}
