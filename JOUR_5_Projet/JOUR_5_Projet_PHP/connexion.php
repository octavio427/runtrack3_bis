
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="script.js">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="navbar.php">
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
            <h1 class='accueille'>Connexion</h1>
            <form id="loginForm" method="post" action="">

                <div class= droite>
                    <p>*champs obligatoires</p>
                </div>

                <label for="email">Email*</label>
                <input type="email"  minlength="8" placeholder="Entrez votre e-mail..." id="mail" name="mail" required>
                <div id="emailError" class="error-message"></div>
                

                <label for="password">Mot de passe*</label>
                <input type="password"  minlength="6" placeholder="Entrez votre mot de passe..." id="password" name="password" required>
                <div id="passwordError" class="error-message"></div>
                  
                <input class='seConnecter'type="submit" value="Se connecter" name="ok">
            </form>

            <p>Vous n'avez pas encore de compte ? <a href="inscription.php">Inscription</a></p>

            <script src="script.js" ></script>
    </body>

</html>