var mongoose = require('mongoose'),
        TestPlan = mongoose.model('TestPlan');

exports.getAll = function(req,res) {
  TestPlan.find({}, function(err, testPlans) {
    if(err) {
      res.status(404).send(err);
    }
    else {
      res.send({testplans: testPlans});
    }
  });
};

exports.getOneById = function(req, res) {
  TestPlan.findOne({'details.extrnId' : req.params.extrnId}, function(err, testplan) {
    if(err) {
      res.status(404).send(err);
    }
    else {
      res.send({plan: testplan});
    }
  });
};