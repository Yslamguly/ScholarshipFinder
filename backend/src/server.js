const express = require('express')
const usersRoutes = require('../src/routes/users.routes')
const app = express()
const port = 8080

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/users',usersRoutes);
app.use('/',(req,res) => {res.send("home page")});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;