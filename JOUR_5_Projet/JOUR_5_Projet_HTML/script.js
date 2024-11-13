document.addEventListener("DOMContentLoaded", () => {
    function validateField(field) {
        const fieldValue = field.value;
        let errorMessage = "";
        
        switch (field.name) {
            case "name":
                if (fieldValue.length < 2) {
                    errorMessage = "Le nom doit contenir au moins 2 caractères.";
                }
                break;
                
            case "surname":
                if (fieldValue.length < 2) {
                    errorMessage = "Le prénom doit contenir au moins 2 caractères.";
                }
                break;
                
            case "adresse":
                if (fieldValue.length < 5) {
                    errorMessage = "L'adresse doit contenir au moins 5 caractères.";
                }
                break;
                
            case "postalCode":
                if (!/^\d{5}$/.test(fieldValue)) {
                    errorMessage = "Le code postal doit être composé de 5 chiffres.";
                }
                break;
                
            case "email":
                if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(fieldValue)) {
                    errorMessage = "Veuillez entrer un email valide.";
                }
                break;
                
            case "password":
                if (fieldValue.length < 6) {
                    errorMessage = "Le mot de passe doit contenir au moins 6 caractères.";
                }
                break;
                
            case "confirmPassword":
                const passwordValue = document.getElementById("password").value;
                if (fieldValue !== passwordValue) {
                    errorMessage = "Les mots de passe ne correspondent pas.";
                }
                break;
        }
        
        const errorDiv = document.getElementById(field.name + "Error");
        errorDiv.textContent = errorMessage;
    }
    
    const fields = ["name", "surname", "adresse", "postalCode", "email", "password", "confirmPassword"];
    
    fields.forEach(fieldId => {
        const fieldElement = document.getElementById(fieldId);
        if (fieldElement) {
            fieldElement.addEventListener("input", () => validateField(fieldElement));
        }
    });
    
    // Form submission prevention to test validation
    document.getElementById("registerForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Formulaire d'inscription soumis.");
    });

    document.getElementById("loginForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Formulaire de connexion soumis.");
    });
});
