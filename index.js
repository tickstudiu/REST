const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(80);

console.log('Server Started!');

var curriculums = [{id: 1, course: 'B.ENG', faculty: 'Computer engineering'},
    {id: 2, course: 'B.sc', faculty: 'infomation technology'},
    {id: 3, course: 'B.sc', faculty: 'software engineering'},
    {id: 4, course: 'B.sc', faculty: 'electronic business'}];
var id = curriculums.length + 1;

app.get('/api/curriculums', (req, res) => {
    res.send(curriculums);
});


app.post('/api/curriculums', (req, res) => {
    let course = req.body.course,
        faculty = req.body.faculty;

    curriculums.push({
        id: id++,
        course: course,
        faculty: faculty
    });

    res.send(curriculums);
});

app.delete('/api/curriculums/:curriculum_id', (req, res) => {
    let id = req.params.curriculum_id,
        tmp = [];

    curriculums.map(curriculum => {
        if (curriculum.id != id)
            tmp.push(curriculum);
    })

    curriculums = tmp;

    res.send(curriculums);
});
