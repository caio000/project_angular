<?php
  header("Access-Control-Allow-Origin: *");
  header('Access-Control-Allow-Credentials: true');
  header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type");

  date_default_timezone_set('America/Sao_Paulo');


  // Pega os contatos no cookie
  $contacts = unserialize($_COOKIE['contacts']);

  // Verifica se existe o paramentro id
  if (isset($_GET['id']) && !empty($_GET['id'])) {
    $contactId = $_GET['id'];
    $contactTemp;

    // procura o contato com o id informado
    foreach ($contacts as $contact) {
      if ($contact['id'] == $contactId) {
        $contactTemp = $contact;
        break;
      }
    }

    // verifica se foi encontrado o contato
    if (empty($contactTemp)) header('HTTP/1.1 404 Not Found');

    $contacts = $contactTemp;
  }

  echo json_encode($contacts);
?>
