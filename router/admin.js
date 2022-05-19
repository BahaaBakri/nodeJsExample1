const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/users', (req, res, next)=> {
    console.log('HERE');
    res.sendFile(path.join(__dirname, '..', 'views', 'add-users.html'));
})
router.post('/users', (req, res, next)=> {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;