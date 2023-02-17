const path = require('path');

const port = process.env.PORT || 1800;
// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const app = express();
app.use('/', express.static(path.join(__dirname, 'coverage')));

// eslint-disable-next-line no-unused-vars
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'coverage/index.html'));
});

app.listen(port);

console.log(`Server started at http://localhost:${port}`);
