// Toggle language function
function toggleLanguage() {
    const body = document.body;
    const currentLang = body.classList.contains("ro") ? "ro" : "en";
    
    if (currentLang === "en") {
        body.classList.add("ro");
        body.classList.remove("en");
        document.getElementById("language-toggle").textContent = "Switch to English"; // Update button text
    } else {
        body.classList.add("en");
        body.classList.remove("ro");
        document.getElementById("language-toggle").textContent = "Switch to Romanian"; // Update button text
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".dropdown-btn");
    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.classList.toggle("active");
        // Toggle display via class, fallback if needed:
        // content.style.display = content.style.display === "block" ? "none" : "block";
      });
    });
  });
  
  // Optional: Toggle Language (if needed)
  function toggleLanguage() {
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.style.display = (el.style.display === 'none' || el.style.display === '') ? '' : 'none';
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    // 1. Toggle preview panel on card click
    const expertiseCards = document.querySelectorAll(".expertise-card");
    expertiseCards.forEach(card => {
      card.addEventListener("click", function(e) {
        // Find the preview panel inside this card
        const previewPanel = this.querySelector(".preview-panel");
        if (previewPanel.style.display === "block") {
          previewPanel.style.display = "none";
        } else {
          previewPanel.style.display = "block";
        }
      });
    });
  
    // 2. Optional: Toggle Language (if you still use data-lang)
    window.toggleLanguage = function() {
      document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = (el.style.display === 'none' || el.style.display === '') ? '' : 'none';
      });
    };
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const expertiseCards = document.querySelectorAll(".expertise-card");
  
    expertiseCards.forEach(card => {
      card.addEventListener("click", function(e) {
        // 1. Toggle the .active class on the card
        card.classList.toggle("active");
  
        // 2. Find the preview panel
        const previewPanel = card.querySelector(".preview-panel");
        if (previewPanel.style.display === "block") {
          previewPanel.style.display = "none";
        } else {
          previewPanel.style.display = "block";
        }
      });
    });
  
    // Optional: Toggle Language
    window.toggleLanguage = function() {
      document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = (el.style.display === 'none' || el.style.display === '') ? '' : 'none';
      });
    };
  });
  
