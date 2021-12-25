// routes/index.js
const router = require('express').Router();
const path = require('path');


// If no API routes are hit, send the React app
// router.use(function(req, res) {
// 	res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });
app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
  });

module.exports = router;