document.addEventListener("DOMContentLoaded", function() {
    // Get level elements
    var levels = document.querySelectorAll(".level");

    function fillLevels(value) {
        // Reset levels
        levels.forEach(function(level, index) {// Set default level names
            level.style.height = "0%"; // Reset level filling
        });

        // Fill levels based on value
        for (var i = 0; i < value; i++) {
            // Set filled level names
            levels[i].style.height = "70%"; // Set level filling to 100%
            if(levels[i].style.height<="30%")
            {
                levels[i].textContent = "Level " + (1) + " (Filled)";
            }
            else if(levels[i].style.height<="60%")
            {
                levels[i].textContent = "Level " + (2) + " (Filled)";
            }
            else
            {
                levels[i].textContent = "Level " + (3) + " (Filled)";
            }
            
        }
        if(levels[0].style.height<="30%")
            {
                document.getElementById("msgp").innerHTML = "&#128525;";
            }
            else if(levels[0].style.height<="60%")
            {
                document.getElementById("msgp").innerHTML = "&#128522;";
            }
            else
            {
                document.getElementById("msgp").innerHTML = "&#128544;";
            }
    }

    // Example usage
    var input = 3; // Change the input value here (1, 2, or 3)
    fillLevels(input);
});
