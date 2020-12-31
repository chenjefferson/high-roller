const express = require('express');
const connectDB = require('./config/db')

/* how Heroku gets port */
const PORT = process.env.PORT || 5000;

const app = express();

// connect dtabase
connectDB();

// init middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('Hello!'))

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/users'));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
