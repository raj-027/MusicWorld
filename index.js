// Get references to the input field and submit button
const commentInput = document.getElementById("commentInput");
const submitButton = document.getElementById("submitButton");

// Add a click event listener to the submit button
submitButton.addEventListener("click", function() {
    // Get the value of the comment input
    const comment = commentInput.value.trim();

    // Check if the comment is not empty
    if (comment !== "") {
        // Display an alert with the comment
        alert("Comment: " + comment);
    } else {
        alert("Please enter a comment before submitting.");
    }

    // Clear the input field after submission
    commentInput.value = "";
});