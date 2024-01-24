var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors())

app.get('/', (req, res) => {
    var data = [{
        "id": "1",
        "title": "Book Review",
        "body": "My Review 1"
    },
    {
        "id": "2",
        "title": "Game Review",
        "body": "My Review 2"
    },
    {
        "id": "3",
        "title": "Show Review",
        "body": "My Review 3",
        
    },
    {
        "id": "4",
        "title": "Bible Review",
        "body": "My Review 4"
    }];
    res.json(data);
});

app.listen(4000, () => {
    console.log('CORS - enable web socket 80');
})