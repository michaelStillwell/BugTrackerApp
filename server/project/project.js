function createNewProject(req, res, next) {
    const db = req.app.get('db');

    db.createNewProject(['Test Title 3', 'Description 3', 2])
        .then(data => res.send(data))
        .catch(err => console.error(err));

    // res.send('Connection Complete!');
}

function readAllProjects(req, res, next) {
    const db = req.app.get('db');

    db.readAllProjects([2])
        .then(data => res.send(data))
        .catch(err => console.error(err));
}

function updateProjectInformation() {
    
}

function deleteProject() {

}

module.exports = {
    createNewProject,
    readAllProjects,
    updateProjectInformation,
    deleteProject};