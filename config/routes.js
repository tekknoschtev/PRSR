module.exports = function(app) {
  
  var index = require('../server/controllers/index');
  app.get('/', index.render);
  
  var plan = require('../server/controllers/testplans');
  app.get('/testplans/:extrnId', plan.getOneById);
  app.get('/testplans', plan.getAll);
//  app.get('/testplans/:extrnId', plan.getOneById);
}