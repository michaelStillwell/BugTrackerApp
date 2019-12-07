function createNewBug(req, res, next) {
    const db = req.app.get('db');

    db.bugs.createNewBug(['Test Bug', 'Bug Description', 2])
        .then(data => res.status(200).json(data))
        .catch(err => console.error('CREATE NEW BUG ERROR -- ', err));
}

function readAllBugs(req, res, next) {
    const db = req.app.get('db');

    db.bugs.readAllBugs([req.params.projectId])
        .then(data => res.status(200).json(data))
        .catch(err => console.error('CREATE NEW BUG ERROR -- ', err));
}

function updateBugInformation(req, res, next) {
    const db = req.app.get('db');

    db.bugs.updateBugInformation([req.params.bugId])
        .then(data => res.status(200).json(data))
        .catch(err => console.error('CREATE NEW BUG ERROR -- ', err));
}

function deleteBug(req, res, next) {
    const db = req.app.get('db');

    db.bugs.deleteBug([req.params.bugId])
        .then(data => res.status(200).json(data))
        .catch(err => console.error('CREATE NEW BUG ERROR -- ', err));
}

module.exports = {
    createNewBug,
    readAllBugs,
    updateBugInformation,
    deleteBug
};