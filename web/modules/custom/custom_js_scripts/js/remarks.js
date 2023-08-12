document.addEventListener("DOMContentLoaded", function () {
  let textarea = document.getElementById("edit-remarks-textarea");

  // Set the initial cursor position at the end of the existing text
  let textLength = textarea.value.length;
  textarea.setSelectionRange(textLength, textLength);

  // Ensure the textarea has focus
  textarea.focus();
});
