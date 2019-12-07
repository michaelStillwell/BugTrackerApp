function createNewProject(req, res, next) {
    const db = req.app.get('db');

    db.project.createNewProject(['Test Title 3', 'Description 3', 2])
        .then(data => res.send(data))
        .catch(err => console.error('CREATE NEW PROJECT ERROR -- ', err));
}

function readAllProjects(req, res, next) {
    const db = req.app.get('db');

    db.project.readAllProjects([req.params.userId])
        .then(data => {
            // If data comes back with information, then send it.
            data.length > 0 ?
                res.status(200).json(data)
            :
            // If not then send a message telling the client so.
                res.status(404).json({message: 'Sorry, there are no projects for this user. o/'});
        }).catch(err => console.error('READ ALL PROJECTS ERROR -- ', err));
}

function updateProjectInformation() {
    const db = req.app.get('db');

    db.project.updateProjectInformation()
        .then(data => res.send(data))
        .catch(err => console.error('UPDATE PROJECT INFO ERROR -- ', err));
}

function deleteProject() {
    const db = req.app.get('db');

    db.project.deleteProject()
        .then(data => res.send(data).status(200))
        .catch(err => console.error('DELETE PROJECT ERROR -- ', err));
}

module.exports = {
    createNewProject,
    readAllProjects,
    updateProjectInformation,
    deleteProject
};