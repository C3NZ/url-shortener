const express = require('express');
const app = express();

//static files mounted in a virtual directory
app.use(express.static('public'));

//get requests sent directly to the home directory
app.get('/', (req, res, next) => {
	res.render('index')
});

app.listen('3000', () => {
	console.log(`started listening on port 3000`)
});