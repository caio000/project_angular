<?php

  date_default_timezone_set('America/Sao_Paulo');

  // Pega os contatos no cookie
  $contacts = unserialize($_COOKIE['contacts']);

  echo json_encode($contacts);
?>
