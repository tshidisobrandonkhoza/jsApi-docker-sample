var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors())

app.get('/', (req, res) => {
    var data = [{
        "id": "1",
        "title": "Book Review"
    },
    {
        "id": "2",
        "title": "Game Review"
    },
    {
        "id": "3",
        "title": "Show Review"
    },
    {
        "id": "4",
        "title": "Bible Review"
    }];
    res.json(data);
});

app.listen(4000, () => {
    console.log('CORS - enable web socket 80');
})