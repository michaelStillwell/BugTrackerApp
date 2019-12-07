UPDATE bugs SET label = $1, description = $2, status = $3
WHERE id = $4;

SELECT * FROM bugs WHERE projectId = $5;