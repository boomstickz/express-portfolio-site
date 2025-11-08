var express = require('express');
var router = express.Router();

/* one route per page. express calls res.render(viewname) to send an ejs file. */

/* home */
router.get('/', (req, res) => {
  res.render('home');      // looks for views/home.ejs
});

/* about */
router.get('/about', (req, res) => {
  console.log('hit /about');
  res.render('about');     // looks for views/about.ejs
});

/* projects */
router.get('/projects', (req, res) => {
  res.render('projects');  // views/projects.ejs
});

/* contact */
router.get('/contact', (req, res) => {
  res.render('contact');   // views/contact.ejs
});

module.exports = router;
