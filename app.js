function animateBirthdayMessage() {
    // Hide the birthday message
    var message = document.getElementById("message");
    message.style.transform = "translateY(50px)";
    message.style.opacity = "0";

    // Show the overlay
    var overlay = document.getElementById("overlay");
    overlay.style.opacity = "0.8";

    // Redirect to hearts.html after a delay
    setTimeout(function() {
        window.location.href = "hearts.html";
    }, 1000);
}
