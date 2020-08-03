const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    }
});
//Create and instantiate model with schema
const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;