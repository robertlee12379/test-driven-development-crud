const employeeModel = require('../models/Employee');
var employeeController = {};

//list
//show
//create
//save
//edit
//update
//delete 

employeeController.list = function(req, res) {
    employeeModel.find({}, function (err, employees) {
        if(err) {
            console.log(`Error: ${err}`);
        } else {
            res.render('./employees/index', {employees:employees})
        }
    });
}

employeeController.show = function(req, res) {
    employeeModel.findOne({_id: req.params.id}, function(err, employee) {
        if(err) {
            console.log(`Error: ${err}`);
        } else {
            res.render('./employees/show', {employee: employee});
        }
    });
}

employeeController.create = function(req, res) {
    res.render('./employees/create');
}

employeeController.save = function(req, res) {
    employeeModel(req.body).save(function(err) {
        if(err) {
            console.log(err);
            res.render('./employees/create');
        } else {
            console.log('Succesfully create an employee');
            res.redirect('./');
        }
    })
}

employeeController.edit = function(req, res) {
    employeeModel.findOne({_id: req.params.id}, function(err, employee) {
        if(err) {
            console.log(`Error : ${err}`);
        } else {
            res.render('./employees/edit', {employee:employee});
        }
    });
};

employeeController.update = function(req, res) {
    employeeModel.findByIdAndUpdate(
        {_id: req.params.id},
        {
            name: req.body.name,
            phone: req.body.phone
        }, 
        function(err, employee) {
        if(err) {
            console.log(err);
            res.render('./employees/edit', {employee:employee});
        } else {
            console.log('Updated!');
            res.redirect('../../');
        }
    })
}

employeeController.delete = function(req, res) {
    employeeModel.remove({_id:req.params.id}, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Deleted!");
            res.redirect('../../')
        }
    })
}

module.exports = employeeController;