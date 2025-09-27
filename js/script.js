welcomeMessage();

/// Welcome Message
function welcomeMessage() {
    /// Prompt user for their name
    let username = prompt("Enter your name:");
    /// If a name is entered, display it in the header; otherwise, show a default message
    if (username) {

        /// Display the username in the header
        document.getElementById("username").innerHTML = username;
    } else {

        /// If no name is entered, show a default welcome message
        alert("Welcome to my portfolio!");
    }
}

/// Form Validation
function validateForm() {
    /// Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    /// Validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        // Tampilkan alert sukses
        alert(`Thanks, ${name}! Form submitted successfully!`);

        // Masukkan data ke summary
        document.getElementById("summaryName").textContent = name;
        document.getElementById("summaryEmail").textContent = email;
        document.getElementById("summaryMessage").textContent = message;

        // Tampilkan box summary
        document.getElementById("summaryBox").classList.remove("hidden");
    }
}