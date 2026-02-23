const form = document.getElementById("feedbackForm");
const successMessage = document.getElementById("successMessage");
const feedbackDisplay = document.getElementById("feedbackDisplay");

let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];

displayFeedback();

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (name === "") {
        alert("Name should not be empty!");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email!");
        return;
    }

    const feedback = { name, email, message };
    feedbackList.push(feedback);

    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

    successMessage.innerText = "Feedback submitted successfully!";
    form.reset();

    displayFeedback();
});

function displayFeedback() {
    feedbackDisplay.innerHTML = "<h3>Submitted Feedback:</h3>";

    feedbackList.forEach(function(item) {
        const div = document.createElement("div");
        div.innerHTML = `<p><strong>${item.name}</strong>: ${item.message}</p>`;
        feedbackDisplay.appendChild(div);
    });
}
