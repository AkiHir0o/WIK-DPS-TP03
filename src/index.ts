import express from "express";

const app = express();
const os = require("os");

app.get('/ping', (req, res) => {
    console.log("Hostname: " + os.hostname());
    return res.status(200).json(req.headers)
})

app.get('*', (req, res) => {
    return res.status(404).json({message: "NOT FOUND"})
})


const port = process.env.PING_LISTEN_PORT || 3000;
app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
})