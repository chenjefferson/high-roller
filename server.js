const express = require('express');

const app = express();

/* how Heroku gets port */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
