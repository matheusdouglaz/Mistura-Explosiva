function toggleContent(button) {
    const content = button.previousElementSibling;
    button.classList.toggle("expanded");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.innerHTML = "Fechar <i class='fas fa-arrow-up'></i>";
    } else {
        content.style.display = "none";
        button.innerHTML = "Expandir <i class='fas fa-arrow-down'></i>";
    }
}
