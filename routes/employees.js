const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');

//list
//show
//create
//save
//edit
//update
//delete 

router.get('/', employeeController.list);
router.get('/show/:id', employeeController.show);
router.get('/create', employeeController.create);
router.post('/save', employeeController.save);
router.get('/edit/:id', employeeController.edit);
router.post('/update/:id', employeeController.update);
router.get('/delete/:id', employeeController.delete);

module.exports = router;