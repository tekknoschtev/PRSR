var app = angular.module('app');

var newPlan = {
    "details": {
      "extrnId": "",
      "softwareChange": "",
      "testStrategy": "",
      "category": [
        {
          "name": "Category 1",
          "testSteps": [
            {
              "setup": "Setup",
              "action": "Action",
              "outcome": "Outcome"
            }
          ]
        }
      ]
    },
    "meta": {
      "modifiedDate": Date.now(),
      "active": true,
      "createdDate": Date.now(),
      "creator": "N/A"
    }
  };

var plan = {
  "details": {
      "extrnId": "SFS-20201",
      "softwareChange": "Fixing a bug that allowed more invoice documents than specified in the \n\n\n MAX_DOC_QTY_FILE when multiple document types used the generic template.  Additionally, enhancements are being made to the messaging after document submission to show users all files that were generated.",
      "testStrategy": "",
      "category": [
        {
          "name": "Obeying MAX_DOC_QTY_FILE",
          "testSteps": [
            {
              "setup": "Have multiple invoice types with pending documents which will all use the generic template.  \nSet the MAX_DOC_QTY_FILE business rule to be less than the total number of documents to generate.",
              "action": "Generate all invoice documents of a specific invoice type (e.g. INVORIG)",
              "outcome": "All documents using the generic template do use the generic template, and only the MAX_DOC_QTY_FILE number of invoice documents appear in each file."
            },
            {
              "setup": "Have multiple invoice types with pending documents which will all use the generic template.  \nSet the MAX_DOC_QTY_FILE business rule to be less than the total number of documents to generate.",
              "action": "Generate all invoice documents of a specific invoice type (e.g. INVORIG)",
              "outcome": "All documents using the generic template do use the generic template, and only the MAX_DOC_QTY_FILE number of invoice documents appear in each file."
            },
            {
              "setup": "Have multiple invoice types with pending documents which will all use the generic template.  \nSet the MAX_DOC_QTY_FILE business rule to be less than the total number of documents to generate.",
              "action": "Generate all invoice documents of a specific invoice type (e.g. INVORIG)",
              "outcome": "All documents using the generic template do use the generic template, and only the MAX_DOC_QTY_FILE number of invoice documents appear in each file."
            }
          ]
        },
        {
          "name": "Messaging Changes",
          "testSteps": [
            {
              "setup": "Multiple invoice types should exist, with more than the MAX_DOC_QTY_FILE number of pending records for each type.",
              "action": "Generate all invoice documents of a specific invoice type (e.g. INVORIG)",
              "outcome": "When the page reloads, a row exists for each invoice type, with an expandable option.  Clicking the expandable section displays all of the files generated for that batch (e.g. ****_1_of_10 through ***_10_of_10.)."
            }
          ]
        },
        {
          "name": "Calculating the \"of_X\" correctly",
          "testSteps": [
            {
              "setup": "Have many invoice documents of a specific document type and multiple invoice types.",
              "action": "Generate only one specific invoice type.",
              "outcome": "The \"_of_X\" is calculated by dividing the total number of documents to generate by the MAX_DOC_QTY_FILE business rule and rounding up to the nearest whole number.  Not by dividing the total number of documents for that type."
            },
            {
              "setup": "Have many invoice documents of a specific document type and multiple invoice types.",
              "action": "Generate only one specific invoice type.",
              "outcome": "The \"_of_X\" is calculated by dividing the total number of documents to generate by the MAX_DOC_QTY_FILE business rule and rounding up to the nearest whole number.  Not by dividing the total number of documents for that type."
            }
          ]
        }
      ]
    },
    "meta": {
      "modifiedDate": "2014-02-11T20:34:57.882Z",
      "active": true,
      "createdDate": "2014-02-11T20:29:15.156Z",
      "creator": "N/A"
    }
};

var url = '/testplans/';

app.factory('TestPlanFactory', function($http) {
  
  return {
    updateTestPlan: function(testplan) {
      console.log(testplan);
      plan = testplan;
      return plan;
    },
    getPlanById: function(planId) {
      return $http.get(url + planId);
    },
    getNewPlan: function() {
      return newPlan;
    },
    getAllPlans: function() {
      return $http.get(url);
//      return [plan, plan, plan, plan, plan];
    }
  };
});