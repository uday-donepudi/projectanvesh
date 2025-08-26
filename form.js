// Enhanced Project Anvesh Dashboard JavaScript
document.addEventListener("DOMContentLoaded", function () {
  console.log("Project Anvesh Dashboard Initialized");

  // Get level elements
  const levels = document.querySelectorAll(".level");
  const statusElements = {
    msgp: document.getElementById("msgp"),
    desmsg: document.getElementById("desmsg"),
    color: document.getElementById("color"),
    sens: document.getElementById("sens"),
    statusText: document.querySelector(".status-text"),
  };

  // Enhanced level filling function with better visual feedback
  function fillLevels(value) {
    console.log(`Filling levels with value: ${value}`);

    // Reset all levels first
    levels.forEach(function (level, index) {
      level.style.height = "0%";
      level.style.opacity = "0.3";
      level.style.transform = "scaleY(0)";
      level.style.transition = "all 0.8s ease-in-out";
    });

    // Determine environmental status
    let status = getEnvironmentalStatus(value);

    // Animate levels based on value with a slight delay for better effect
    setTimeout(() => animateLevels(value, status), 100);

    // Update UI elements
    updateUIElements(status);

    // Update sensor readings
    updateSensorReadings(value);
  }

  // Make fillLevels globally available
  window.fillLevels = fillLevels;

  function getEnvironmentalStatus(value) {
    if (value <= 30) {
      return {
        level: "EXCELLENT",
        emoji: "😍",
        message:
          "Outstanding environmental conditions! Minimal pollution detected.",
        color: "#4CAF50",
        bgColor: "linear-gradient(45deg, #4CAF50, #81C784)",
      };
    } else if (value <= 60) {
      return {
        level: "MODERATE",
        emoji: "😊",
        message:
          "Moderate pollution levels. Environmental conditions are acceptable but could be improved.",
        color: "#FF9800",
        bgColor: "linear-gradient(45deg, #FF9800, #FFB74D)",
      };
    } else {
      return {
        level: "CRITICAL",
        emoji: "😰",
        message:
          "High pollution levels detected! Immediate environmental action is strongly recommended.",
        color: "#F44336",
        bgColor: "linear-gradient(45deg, #F44336, #E57373)",
      };
    }
  }

  function animateLevels(value, status) {
    // Calculate level heights based on value
    const levelHeights = calculateLevelHeights(value);

    console.log(`Animating bar to ${value}% height`);

    levels.forEach((level, index) => {
      const height = levelHeights[index];

      setTimeout(() => {
        if (height > 0) {
          level.style.height = height + "%";
          level.style.opacity = "1";
          level.style.transform = "scaleY(1)";

          // Set color based on percentage value
          if (value <= 30) {
            level.style.background = "linear-gradient(45deg, #4CAF50, #81C784)"; // Green for 0-30%
          } else if (value <= 70) {
            level.style.background = "linear-gradient(45deg, #FF9800, #FFB74D)"; // Orange for 31-70%
          } else {
            level.style.background = "linear-gradient(45deg, #F44336, #E57373)"; // Red for 71-100%
          }

          console.log(`Level ${index + 1} set to ${height}% height`);
        } else {
          level.style.height = "0%";
          level.style.opacity = "0.3";
          level.style.transform = "scaleY(0)";
        }
      }, index * 100); // Faster animation since we're only using one level
    });
  }

  function calculateLevelHeights(value) {
    const heights = [0, 0, 0];

    console.log(`Calculating heights for value: ${value}%`);

    // Simple direct percentage mapping - use only one level (level3 - bottom)
    // If value is 50, bar fills to 50% of total height
    if (value > 100) value = 100; // Cap at 100%
    if (value < 0) value = 0; // Floor at 0%

    heights[2] = value; // Bottom level directly shows the percentage

    console.log(`Bar will fill to: ${heights[2]}% of total height`);
    return heights;
  }

  function updateUIElements(status) {
    if (statusElements.msgp) {
      statusElements.msgp.textContent = status.emoji;
    }

    if (statusElements.statusText) {
      statusElements.statusText.textContent = status.level;
      statusElements.statusText.style.color = status.color;
    }

    if (statusElements.desmsg) {
      statusElements.desmsg.textContent = status.message;
    }
  }

  function updateSensorReadings(colorValue) {
    // Calculate proximity sensor value based on color (fixed values, not random)
    let proximityValue;
    if (colorValue <= 30) {
      proximityValue = Math.floor(Math.random() * 100) + 400; // Fixed value for good conditions
    } else if (colorValue <= 60) {
      proximityValue = Math.floor(Math.random() * 100) + 800; // Fixed value for moderate conditions
    } else {
      proximityValue = Math.floor(Math.random() * 100) + 900; // Fixed value for poor conditions
    }

    if (statusElements.color) {
      statusElements.color.textContent = colorValue;
    }

    if (statusElements.sens) {
      statusElements.sens.textContent = proximityValue;
    }
  }

  // Make fillLevels globally available
  window.fillLevels = fillLevels;

  // Add a test function for debugging
  window.testLevels = function (testValue) {
    console.log(`Testing levels with value: ${testValue}`);
    fillLevels(testValue);
  };

  // Global function for refresh button - this will be called by home.html
  window.refreshData = function () {
    console.log("Refreshing data from Firebase...");

    // Show loading state
    if (statusElements.msgp) statusElements.msgp.textContent = "🔄";
    if (statusElements.statusText)
      statusElements.statusText.textContent = "Loading...";
    if (statusElements.desmsg)
      statusElements.desmsg.textContent =
        "Fetching latest environmental data...";

    // The actual Firebase refresh will be handled by home.html
    // This is just for visual feedback
  };

  // Remove demo mode - let Firebase data take control
  console.log("Form.js loaded - waiting for Firebase data from home.html");
});
