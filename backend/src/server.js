const express = require('express')
const customerRoutes = require('../src/routes/users.routes')
const app = express()
const port = 8080


app.use('/test',customerRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;