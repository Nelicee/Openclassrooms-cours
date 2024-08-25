<?php

class Comment { 
    public string $author;
    public string $frenchCreationDate;
    public string $comment;
}

$comment = new Comment();
$comment->author ='Auteur';
$comment->frenchCreationDate = '23/03/2022 à 11h30min00s';
$comment->comment = 'Commentaire';

$comment->author ='Nouvel Auteur';

echo $comment->author;

var_dump($comment);

function test(Comment $comment){
    var_dump($comment);
}
test($comment);