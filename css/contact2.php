<?php
    require 'vendor/autoload.php';
    use \Mailjet\Resources;
    $mj = new \Mailjet\Client('****************************1234','****************************abcd',true,['version' => 'v3.1']);

    if (!empty($_post['name']) && !empty($_post['email']) && !empty($_post['message'])){
        $name = htmlspecialchars($_post['name']);
        $email = htmlspecialchars($_post['email']);
        $message = htmlspecialchars($_post['message']);

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $body = [
                'Messages' => [
                  [
                    'From' => [
                      'Email' => "romaric.nganas@gmail.com",
                      'Name' => "Romaric"
                    ],
                    'To' => [
                      [
                        'Email' => "romaric.nganas@gmail.com",
                        'Name' => "Romaric"
                      ]
                    ],
                    'Subject' => "Vos remarques",
                    'TextPart' => "My first Mailjet email",
                    'HTMLPart' => "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                    'CustomID' => "AppGettingStartedTest"
                  ]
                ]
              ];
              $response = $mj->post(Resources::$Email, ['body' => $body]);
              $response->success();
              echo "email envoyé avec succès"
            ?>
        
        }else {echo "Email non valide";

        }
    }else{
        heade('location:contact.php');
        die();

    }