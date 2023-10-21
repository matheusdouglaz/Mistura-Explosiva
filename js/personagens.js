function toggleAccordion(id) {
    var content = document.getElementById(id);
    content.classList.toggle("active");

    var text = content.querySelector('.text');
    text.style.display = text.style.display === 'none' ? 'block' : 'none';

    var arrow = content.previousElementSibling;
    arrow.classList.toggle("active");
}