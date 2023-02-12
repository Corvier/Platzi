const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => res.send('Hello World!'))
// Starting the server
app.listen(app.get("port"), () => { console.clear(); console.log(`Server is Running on port http://localhost:${app.get("port")}`); });