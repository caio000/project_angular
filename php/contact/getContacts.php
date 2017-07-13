<?php
  header("Access-Control-Allow-Origin: *");
  header('Access-Control-Allow-Credentials: true');
  header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type");

  date_default_timezone_set('America/Sao_Paulo');

  // Pega os contatos no cookie
  $contacts = unserialize($_COOKIE['contacts']);

  echo json_encode($contacts);
?>
