var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article one | Satyam Agrawaal',
    heading:'Article One',
    date: 'August 20 2017',
    content:`  <p>
            This is the content for my first article.This is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first article
            </p>
            
            <p>
            This is the content for my first article.This is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first article
            </p>
            
            <p>
            This is the content for my first article.This is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first article
            </p>`
};

function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
              ${title}
            </title>
             <link href="/ui/style.css" rel="stylesheet" />
           
        </head>
        <body>
            <div class="container">
            <div>
                <a href ="/">Home</a>
            </div>
            <hr/>
            <h3>
               ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
            </div>
        </body>
        
        
    </html>
    
    
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
    res.send('Article two is requested and will be served here');
});

app.get('/article-three', function (req, res) {
    res.send('Article three is requested and will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names= [];
app.get('/submit-name',function(req,res){ //URL:/submit-name?name=xxxxx
   //get the name from the request object
   //var name =req.params.name;
   var name =req.query.name;
   names.push(name);
   //JSON : javascript Object Notation
   res.send(JSON.stringify(names));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
