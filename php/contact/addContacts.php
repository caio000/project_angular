<?php
  date_default_timezone_set('America/Sao_Paulo');

  $post = file_get_contents("php://input");
  $contact = json_decode($post);

  // Transforma o objeto em um array
  $contact = get_object_vars($contact);
  $contact['phoneCompany'] = get_object_vars($contact['phoneCompany']);

  // Verifica se o array de contatos existe
  if ( isset($_COOKIE['contacts']) )
    $contacts = unserialize($_COOKIE['contacts']);
  else
    $contacts = array();


  array_push($contacts, $contact);
  $message = (setcookie('contacts', serialize($contacts))) ? 'Contato cadastrado com sucesso' : 'Não foi possivel cadastrar o contato';

  echo $message;

?>