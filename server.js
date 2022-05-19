const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const adminRoutes = require('./router/admin');
const frontRoutes = require('./router/front');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoutes)
app.use(frontRoutes)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})
app.listen(3000);