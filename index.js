(async () => {
  try {
    const module = await import("./index.mjs");
    console.log("Module successfully imported:", module);

    // If there's a default export, you can use it like this:
    // module.default();

    // Or if there are named exports, you can use them like this:
    // module.someNamedExport();
  } catch (error) {
    console.error("Failed to import module:", error);
  }
})();
