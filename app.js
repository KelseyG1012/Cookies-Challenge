const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// Use cookie-parser middleware
app.use(cookieParser());

// Route to set a cookie
app.get('/login', (req, res) => {
    const name = req.query.name;
    if (name) {
        res.cookie('name', name, { httpOnly: true });
        res.send(`Cookie set for name: ${name}`);
    } else {
        res.send('Please provide a name query parameter');
    }
});

// Route to check for the cookie and greet the user
app.get('/hello', (req, res) => {
    const name = req.cookies.name;
    if (name) {
        res.send(`Welcome ${name}!`);
    } else {
        res.send('No name cookie found. Please login first.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
