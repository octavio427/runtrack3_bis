document.addEventListener("DOMContentLoaded", () => {
    function validateField(field) {
        fetch("validation.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fieldName: field.name, fieldValue: field.value })
        })
        .then(response => response.json())
        .then(data => {
            const errorDiv = document.getElementById(field.name + "Error");
            if (data.valid) {
                errorDiv.textContent = ""; // Pas d'erreur
            } else {
                errorDiv.textContent = data.message; // Affiche le message d'erreur
            }
        })
        .catch(error => {
            console.error("Erreur lors de la vérification :", error);
        });
    }

    const fields = ["name", "surname", "adresse", "codePostal", "email", "password", "password_confirmation"];
    fields.forEach(fieldId => {
        const fieldElement = document.getElementById(fieldId);
        if (fieldElement) {
            fieldElement.addEventListener("input", () => validateField(fieldElement));
        }
    });
});
