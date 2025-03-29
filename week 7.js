// Select elements
const button = document.getElementById("animate-btn");
const image = document.getElementById("hero-image");

// Function to animate the image
button.addEventListener("click", () => {
    image.classList.add("shake");

    // Remove animation after it plays
    setTimeout(() => {
        image.classList.remove("shake");
    }, 500);

    // Store user preference
    localStorage.setItem("lastAction", "buttonClicked");
});

// Retrieve user preference when page loads
window.onload = function () {
    const lastAction = localStorage.getItem("lastAction");

    if (lastAction === "buttonClicked") {
        console.log("Welcome back! You clicked the button last time.");
    }
};
