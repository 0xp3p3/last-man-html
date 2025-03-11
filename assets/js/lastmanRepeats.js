// Fetch the JSON file and replace placeholders in the HTML
document.addEventListener("DOMContentLoaded", () => {
  // Path to the JSON file
  const jsonFilePath = "../../_lib/d/j/repeats.json";

  // Fetch the JSON file
  fetch(jsonFilePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Replace placeholders in the HTML
      replacePlaceholders(data);
    })
    .catch(error => {
      console.error("Error loading brand content:", error);
    });
});

// Function to replace placeholders in the HTML
function replacePlaceholders(brandContent) {
  // Get all text nodes in the document
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;

  while (node = walker.nextNode()) {
    // Replace placeholders in the text content
    Object.keys(brandContent).forEach(key => {
      const placeholder = `{{${key}}}`;
      node.nodeValue = node.nodeValue.replace(new RegExp(placeholder, "g"), brandContent[key]);
    });
  }
}