<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);
$fieldName = $data['fieldName'] ?? '';
$fieldValue = $data['fieldValue'] ?? '';
$response = ["valid" => true, "message" => ""];

switch ($fieldName) {
    case 'name':
        if (strlen($fieldValue) < 2) {
            $response = ["valid" => false, "message" => "Le nom doit contenir au moins 2 caractères."];
        }
        break;

    case 'surname':
        if (strlen($fieldValue) < 2) {
            $response = ["valid" => false, "message" => "Le prénom doit contenir au moins 2 caractères."];
        }
        break;

    case 'adresse':
        if (strlen($fieldValue) < 5) {
            $response = ["valid" => false, "message" => "L'adresse doit contenir au moins 5 caractères."];
        }
        break;

    case 'codePostal':
        if (!preg_match("/^[0-9]{5}$/", $fieldValue)) {
            $response = ["valid" => false, "message" => "Le code postal doit être composé de 5 chiffres."];
        }
        break;

    case 'email':
        if (!filter_var($fieldValue, FILTER_VALIDATE_EMAIL)) {
            $response = ["valid" => false, "message" => "Veuillez entrer un email valide."];
        }
        break;

    case 'password':
        if (strlen($fieldValue) < 6) {
            $response = ["valid" => false, "message" => "Le mot de passe doit contenir au moins 6 caractères."];
        }
        break;

    case 'password_confirmation':
        $password = $data['password'] ?? '';
        if ($fieldValue !== $password) {
            $response = ["valid" => false, "message" => "Les mots de passe ne correspondent pas."];
        }
        break;

    default:
        $response = ["valid" => false, "message" => "Champ invalide."];
        break;
}

echo json_encode($response);
?>
