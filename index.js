var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser());

app.listen(8090, function(){
    console.log('El servidor esta corriendo');
});

app.get('/v1/post/all', (req, res) =>{

    let result = {
        success: true,
        message: 'Este es el listado completo de todos los posts',
    }

    res.send(result);
});

app.post('/v1/post/create', (req, res) =>{
    let date = "23/10/2018";
    let postID = 1;
    let description = req.body.description;
    let likes = 0;

    let result = {
        success: true,
        message: 'La publicación se creo exitosamente',
        postID: postID,
        date: date,
        description: description,
        likes: likes
    }

    res.send(result);
});

app.post('/v1/post/comment/create', (req, res) => {
    let commentID = 1;
    let date = "23/10/2018";
    let description = req.body.description;
    let postID = 1;

    let result = {
        success: true,
        message: `Se agrego el comentario al post: ${postID} exitosamente`,
        commentID: commentID,
        date: date,
        description: description,
    }

    res.send(result);
});

app.put('/v1/post/like', (req, res) => {
    let postID = 1;
    let likes = 0;
    likes++;

    var result = {
        success: true,
        message: `Se agrego un like al post: ${postID} exitosamente`,
        likes: likes
    }

    res.send(result);
});

app.delete('/v1/post/remove', (req, res) => {
   let postID = req.query.postID;
   
   var result = {
       success: true,
       message: `El post: ${postID} ha sido eliminado!`
   };

   res.send(result);
});