function toggleDetails(button) {
    const details = button.previousElementSibling; // Select the hidden details div
    if (details.classList.contains("hidden")) {
        details.classList.remove("hidden");
        button.textContent = "Show Less"; // Change button text
    } else {
        details.classList.add("hidden");
        button.textContent = "Learn More"; // Reset button text
    }
}
