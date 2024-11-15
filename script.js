function menuIconTransform(x) {
    x.classList.toggle("transform");
}

function toggleVisibility(x) {
    const element = document.getElementById(x);
    if (element.style.display === "flex") {
        element.style.display = "none";
    } else {
        element.style.display = "flex";
    }
}