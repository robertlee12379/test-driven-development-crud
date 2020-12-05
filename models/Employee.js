const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema);