module.exports = function(app) {
  
  var index = require('../server/controllers/index');
  app.get('/', index.render);
}