//Enlarge Image
function enlargeImage(img) {
    // Create an overlay element
    var overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";
    
    // Create an image element within the overlay
    var enlargedImg = document.createElement("img");
    enlargedImg.src = img.src;
    enlargedImg.style.maxWidth = "90%";
    enlargedImg.style.maxHeight = "90%";
    enlargedImg.style.objectFit = "contain";

    // Append the image to the overlay
    overlay.appendChild(enlargedImg);
    
    // Append the overlay to the body
    document.body.appendChild(overlay);
    
    // Close the overlay when teh close button is clicked
    overlay.addEventListener("click", function () {
        document.body.removeChild(overlay);
    });
}

//Hamburger Menu
function toggleMenu() {
    var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}

window.addEventListener('resize', function() {
    var links = document.getElementById("myLinks");
    if (window.innerWidth > 768) {
        links.style.display = "";
    } else {
        links.style.display = "none";
    }
});