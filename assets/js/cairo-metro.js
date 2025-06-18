const toggleButton = document.querySelector(".toggle-btn");
const cairoMetroContainer = document.querySelector("main .container");
const mainSection = document.querySelector("main")

toggleButton.addEventListener("click", function() {
    cairoMetroContainer.classList.toggle("container");
    cairoMetroContainer.classList.toggle("hidden");
    mainSection.classList.toggle("main-toggle");

    if (cairoMetroContainer.classList.contains("hidden")) {
        toggleButton.innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
    } else {
        toggleButton.innerHTML = "<i class = 'fa-solid fa-eye'></i>";
    }

});