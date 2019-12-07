INSERT INTO bugs (label, description, projectId)
VALUES ($1, $2, $3);

SELECT * FROM bugs WHERE projectId = $3;