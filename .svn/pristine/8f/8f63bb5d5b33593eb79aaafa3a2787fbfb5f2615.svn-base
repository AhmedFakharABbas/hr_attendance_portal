const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/people_html'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

// const forceSSL = function() {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//         ['http://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// }
// Instruct the app
// to use the forceSSL
// middleware
// app.use(forceSSL());

const path = require('path');
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/people_html/index.html'));
});


