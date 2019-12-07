DELETE FROM bugs WHERE id = $1;

SELECT * FROM bugs WHERE projectId = $2;