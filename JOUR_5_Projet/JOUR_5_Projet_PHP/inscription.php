

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="script.js">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="validation.php">
       
        <title>Jour_5_projet</title>

        <!-- <script src="script.js" defer></script> -->

        <style>
        .error-message { color: red; font-size: 0.9em; }
        </style>

    </head>

    <header>
        <?php
            require_once 'navbar.php';
        ?>
    </header>

    <body>
        
        

        <div class='formulaire'>
        <h1 class='accueille'>Inscription</h1>
            <!-- <form method="post" action=""> -->
            <form id="registerForm" method="POST" action="traitement_inscription.php">

                <div class= droite>
                    <p>*champs obligatoires</p>
                </div>

                    <label for="name">Nom*</label>
                    <!-- <input type="text"  minlength="2" placeholder="Entrez votre nom..." id="name" name="name" style="width: 500px;" required > -->
                    <input type="text"  placeholder="Entrez votre nom..." id="name" name="name" style="width: 400px;" required >
                    <span id="nameError" class="error"></span>

                    <label for="surname">Prénom*</label>
                    <!-- <input type="text"  minlength="2" placeholder="Entrez votre prénom..." id="surname" name="surname" style='width: 500px;' required > -->
                    <input type="text"  placeholder="Entrez votre prénom..." id="surname" name="surname" style='width: 400px;' required >
                    <span id="surnameError" class="error"></span>

                    <label for="adresse">Adresse*</label>
                    <!-- <input type="text"  minlength="6" placeholder="Entrez votre adresse..." id="adresse" name="adresse" style="width: 500px;" required > -->
                    <input type="text"  placeholder="Entrez votre adresse..." id="adresse" name="adresse" style="width: 400px;" required >
                    <span id="adresseError" class="error"></span>

                    <label for="codePostal">Code postal*</label>
                    <!-- <input type="text"  minlength="5" placeholder="Entrez votre code postal..." id="code_postal" name="code_postal" style="width: 500px;" required > -->
                    <input type="text"  placeholder="Entrez votre code postal..." id="code_postal" name="code_postal" style="width: 400px;" required >
                    <span id="codePostalError" class="error"></span>

                    <label for="email">Email*</label>
                    <!-- <input type="email"  minlength="8" placeholder="Entrez votre e-mail..." id="mail" name="mail" style= 'width:500px;' required> -->
                    <input type="email"  placeholder="Entrez votre e-mail..." id="mail" name="mail" style= 'width:400px;' required>
                    <span id="emailError" class="error"></span>

                    <label for="password">Mot de passe*</label>
                    <!-- <input type="password"  minlength="6" placeholder="Entrez votre mot de passe..." id="password" name="password" style='width: 500px;' required> -->
                    <input type="password" placeholder="Entrez votre mot de passe..." id="password" name="password" style='width: 400px;' required>
                    <span id="passwordError" class="error"></span>

                    <label for="password_confirmation">Confirmation du mot de passe*</label>
                    <!-- <input type="password"   minlength="6" placeholder="Confirmez votre mot de passe..." id="password_confirmation" name="password_confirmation" style='width: 500px;' required> -->
                    <input type="password" placeholder="Confirmez votre mot de passe..." id="password_confirmation" name="password_confirmation" style='width: 400px;' required>
                    <span id="password_confirmationError" class="error"></span>

                    <input class='seConnecter'type="submit" value="Inscription" name="ok">
            </form>

            <p>Vous avez déjà un compte ? <a href="connexion.php">Connectez-vous</a></p>

        </div>
        <script src="script.js" ></script>
    </body>

</html>