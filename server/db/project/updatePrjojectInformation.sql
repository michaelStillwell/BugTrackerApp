UPDATE projects SET title = $1, description = $2
WHERE id = $3;

SELECT * FROM projects WHERE id = $4;