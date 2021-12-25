// routes/index.js
const router = require('express').Router();
const path = require('path');


// If no API routes are hit, send the React app
// router.use(function(req, res) {
// 	res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });
// console.log(path.join(__dirname, '../client/build/index.html'))
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', "index.html"));
  });

module.exports = router;