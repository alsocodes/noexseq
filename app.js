const express = require("express");
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.get('/', (req, res)=> {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`App running on ${host}:${port}`);
})