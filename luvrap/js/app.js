document.addEventListener("DOMContentLoaded", () => {
    const gateForm = document.getElementById("gate-form");
    const gateSection = document.getElementById("gate-section");
    const consoleSection = document.getElementById("console-section");
    const emailInput = document.getElementById("user-email");

    // PASTE YOUR GENERATED GOOGLE APPS SCRIPT WEB APP URL HERE
    const GOOGLE_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxBh3aBsAI2I_oKTKW0xWKrRFqwPJzBYAwozBpvMsCtjBDe8E8QzVlJ9t-T9hwmrj6LUA/exec";

    gateForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        if (!email) return;

        // Fire-and-forget async submission to Google Sheet pipeline
        try {
            fetch(GOOGLE_WEB_APP_URL, {
                method: "POST",
                mode: "no-cors", // Prevents CORS preflight failures from standard browsers
                headers: {
                    "Content-Type": "text/plain"
                },
                body: JSON.stringify({
                    email: email,
                    tag: "luv-rap-challenge"
                })
            });
        } catch (error) {
            console.error("Transmission fault logged:", error);
        }

        // Hardware-Accelerated Phase UI Switch via GSAP executed instantly
        const tl = gsap.timeline();

        tl.to(gateSection, {
            duration: 0.4,
            opacity: 0,
            y: -20,
            onComplete: () => {
                gateSection.classList.add("hidden");
                consoleSection.classList.remove("hidden");
            }
        });

        tl.to(consoleSection, {
            duration: 0.5,
            opacity: 1,
            y: 0,
            ease: "power2.out"
        });
    });
});