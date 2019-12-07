INSERT INTO projects(title, description, userId)
VALUES ($1, $2, $3);

SELECT * FROM projects WHERE userId = $3;