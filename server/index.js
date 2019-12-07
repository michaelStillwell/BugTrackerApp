const express = require('express');
const massive = require('massive');
const cors = require('cors');
const { json } = require('body-parser');
const app = express();
const port = 3223;

app.use(cors());
app.use(json());

// Project Imports
const {
    createNewProject, readAllProjects,
    updateProjectInformation, deleteProject
} = require('./project/project');

// Bug Imports
const {
    createNewBug, readAllBugs,
    updateBugInformation, deleteBug
} = require('./bugs/bugs');

let scripts = './db';

massive({
    host: 'localhost',
    port: 5432,
    database: 'BugTracker',
    user: 'postgres',
    password: '5729turt1996',
    ssl: false,
    poolSize: 10,
}, {scripts: scripts}).then(dbInstance => app.set('db', dbInstance))
.catch(err => console.error(err));

app.get('/', (req, res, next) => res.send('<h1>Hello World!</h1>'));

// CREATE
app.get('/api/create/project/', createNewProject);
app.get('/api/create/bug/:projectId', createNewBug);

// READ
app.get('/api/read/project/:userId', readAllProjects);
app.get('/api/read/bugs/:projectId', readAllBugs);

// UPDATE
app.get('/api/update/project/:userId', updateProjectInformation);
app.get('/api/update/bugs/:bugId', updateBugInformation);

// DELETE
app.get('/api/delete/project/:userId', deleteProject);
app.get('/api/delete/bugs/:bugId', deleteBug);

app.listen(3223, () => console.log(`Listening on port ${port}`));