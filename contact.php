<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Contacter Charles CANTIN">
    <title> contact Charles Cantin </title>
    <link rel="stylesheet" href="css/bootstrap.css">
    
</head>

<body>

    <header class="container-fluid"><!--logo--> 
        <img src ="images/logo.png" alt="Notre Logo"/>
   </header>
   <nav class="container"><!--Rubrique/menu--> 
       <ul>
           <li><a href="index.html">Accueil</a></li>
           <li><a href="galerie.html">Galerie</a></li>
           <li><a href="tarifsetprestations.html">Tarifs et Prestations</a></li>
           <li><a href="contact.html">Contact</a></li>
       </ul>
   </nav>
   <section class="container">
        <div class="formulaire">
            <h1>Nous-contacter</h1>
            <hr>
            <p>Un probleme , une question, ou envie de nous faire des remarques ? 
             N'hésitez pas à utiliser le formulaire ci-dessous</p>
            <br>
           <form action="contact2.php" method="POST">
              <div class="d-flex">
                  <input type="text" name="name" placeholder="Par exemple Brice" class="form-control" required/>
              </div>
               <br>
               <input type="email" name="email" placeholder="monadresse@....." class="form-control" required/>
               <br>
               <textarea rows="20" name="message" placeholder=" Ecrivez ici votre message..." class="form-control" required></textarea>
               <br>
               <button type="submit" class="btn btn-lg btn-primary" >Envoyer mon message</button> 
              </div>
          </form>
    </div>  
   </section>
   <footer class="container">
       <p><a href="#">Tout droit réservé copyright</a></p>
   </footer>
   <script src="contact.js"></script>
   
 </body>
 </html>     