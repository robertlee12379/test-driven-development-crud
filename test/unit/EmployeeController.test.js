const employeeController = require('../../controllers/EmployeeController');
const employeeModel = require('../../models/Employee');
const httpMocks = require('node-mocks-http');
const Employee = require('../../models/Employee');

let req, res;

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    res.render = jest.fn();
});

employeeModel.find = jest.fn();
employeeModel.findOne = jest.fn();
employeeModel.save = jest.fn();
employeeModel.findByIdAndUpdate = jest.fn();
employeeModel.remove = jest.fn();

describe("employeeController list", () => {
    test("employeeController.list is a function", () => {
        expect(typeof employeeController.list).toBe('function');
    });
    test("should call employeeController.find", () => {
        employeeController.list(req, res);
        expect(employeeModel.find).toHaveBeenCalled();
    });
});

describe("employeeController show", () => {
    test("employeeController.show is a function", () => {
        expect(typeof employeeController.show).toBe('function');
    });
    test("should call employeeController.show", () => {
        employeeController.show(req, res);
        expect(employeeModel.findOne).toHaveBeenCalled();
    });    
});


describe("employeeController create", () => {
    test("employeeController.create is a function", () => {
        expect(typeof employeeController.create).toBe('function');
    });
    test("should call res.render", () => {
        employeeController.create(req, res);
        expect(res.render).toHaveBeenCalled();
    })
});


describe("employeeController save", () => {
    test('employeeController.save is a function', () => {
        expect(typeof employeeController.save).toBe('function');
    });
});

describe("employeeController edit", () => {
    test('employeeController.edit is a function', () => {
        expect(typeof employeeController.edit).toBe('function');
    });
    test("should call findOne", () => {
        employeeController.show(req, res);
        expect(employeeModel.findOne).toHaveBeenCalled();
    });    
});


describe("employeeController update", () => {
    test('employeeController.update is a function', () => {
        expect(typeof employeeController.update).toBe('function');
    });
    test("should call findByIdAndUpdate", () => {
        employeeController.update(req, res);
        expect(employeeModel.findByIdAndUpdate).toHaveBeenCalled();
    });
});


describe("employeeController delete", () => {
    test('employeeController.delete is a function', () => {
        expect(typeof employeeController.delete).toBe('function');
    });
    test("should call remove", () => {
        employeeController.delete(req, res);
        expect(employeeModel.remove).toHaveBeenCalled();
    });
});
