const express = require('express');
const massive = require('massive');
const cors = require('cors');
const app = express();
const port = 3223;

const {
    readAllProjects, createNewProject
} = require('./project/project');

app.use(cors());

massive({
    host: 'localhost',
    port: 5432,
    database: 'BugTracker',
    user: 'postgres',
    password: '5729turt1996',
    ssl: false,
    poolSize: 10,
    scripts: {db: './my_db'}
}).then(dbInstance => app.set('db', dbInstance))
.catch(err => console.error(err));

app.get('/', (req, res, next) => res.send('<h1>Hello World!</h1>'));
app.get('/api/create/project/', createNewProject);
app.get('/api/read/project/', readAllProjects);

app.listen(3223, () => console.log(`Listening on port ${port}`));