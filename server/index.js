const express = require('express');
const app = express();
const port = 3223;

app.get('/', (req, res, next) => res.send('<h1>Hello World!</h1>'));

app.listen(3223, () => console.log(`Listening on port ${port}`));