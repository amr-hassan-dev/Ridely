// Alexandria Tram Map Toggle
const tramMap = document.getElementById("alex-tram-map");
const toggleButton = document.querySelector(".toggle-btn");

toggleButton.addEventListener("click", function() {
    tramMap.classList.toggle("hidden");

    if (tramMap.classList.contains("hidden")) {
        toggleButton.innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
    } else {
        toggleButton.innerHTML = "<i class = 'fa-solid fa-eye'></i>";
    }
});

const fromSelector = document.querySelector("#ride-from");
const toSelector = document.querySelector("#ride-to");
const goButton  = document.querySelector(".btn");
const result = document.querySelector(".destination .result")

goButton.addEventListener("click", () => {
    if (fromSelector.value === toSelector.value) {
        alert("Please select different locations.");
    }

    if (fromSelector.value === "mostafaKamel" && toSelector.value === "roushdy") {
        result.classList = "after-result";
        result.textContent = "You can take any tram from Mostafa Kamel to Roushdy.";
    }
});


