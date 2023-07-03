import { jest, describe, it, beforeEach, expect } from '@jest/globals';
import EmployeesModel from '../models/EmployeesModel';
import { expectedAddEmployeeController, mockAddEmployeeRequest, mockAddEmployeeModelResponse } from '../mocks/CreateEmployeeMock';
import EmployeesController from './EmployeesController';
import { expectedUpdateControllerResponse, mockUpdateEmployeeControllerRequest, mockUpdateEmployeeModelResponse } from '../mocks/UpdateEmployeeMock';
import { mockGetAllEmployeesRecord, mockGetEmployeeRecord } from '../mocks/GetEmployeesMock';

jest.mock('../models/EmployeesModel');
  
const mockGetAddEmployeeDataFromModel = jest.spyOn(EmployeesModel.prototype, 'addEmployee')
const mockDeleteEmployeeDataFromModel = jest.spyOn(EmployeesModel.prototype, 'deleteEmployee');
const mockUpdateEmployeeDataFromModel = jest.spyOn(EmployeesModel.prototype, 'updateEmployee');
const mockGetEmployeeDataFromModel = jest.spyOn(EmployeesModel.prototype, 'getEmployee');
const mockGetAllEmployeesDataFromModel = jest.spyOn(EmployeesModel.prototype, 'getAllEmployees');

let employeesController = new EmployeesController();

beforeEach(() => {
    jest.clearAllMocks();
})

describe('Testing controller', () => {
  it('Create employee', async () => {
    const mockEmployeeRecord = jest.fn(async () => mockAddEmployeeModelResponse);
    mockGetAddEmployeeDataFromModel.mockImplementation(mockEmployeeRecord);
    const controllerResponse = await employeesController.addEmployee(mockAddEmployeeRequest);

    expect(JSON.stringify(controllerResponse)).toEqual(JSON.stringify(expectedAddEmployeeController))
  });

  it('Update employee', async () => {
    const mockEmployeeRecord = jest.fn(async () => mockUpdateEmployeeModelResponse);
    mockUpdateEmployeeDataFromModel.mockImplementation(mockEmployeeRecord);
    const controllerResponse = await employeesController.updateEmployee(mockUpdateEmployeeControllerRequest);

    expect(JSON.stringify(controllerResponse)).toEqual(JSON.stringify(expectedUpdateControllerResponse));
  })

  it('Delete employee', async () => {
    const mockEmployeeRecord = jest.fn(async () => { return { acknowledged: true, deletedCount: 1 }});
    mockDeleteEmployeeDataFromModel.mockImplementation(mockEmployeeRecord);
    const controllerResponse = await employeesController.deleteEmployee('123');

    expect(JSON.stringify(controllerResponse)).toEqual(JSON.stringify({_id: '123'}));
  })

  it('Get Employee', async () => {
    const mockEmployeeRecord = jest.fn(async () => mockGetEmployeeRecord);
    mockGetEmployeeDataFromModel.mockImplementation(mockEmployeeRecord);
    const controllerResponse = await employeesController.getEmployee('123');

    expect(JSON.stringify(controllerResponse)).toEqual(JSON.stringify(mockGetEmployeeRecord));
  })

  it('Get All Employees', async () => {
    const mockEmployeeRecord = jest.fn(async () => mockGetAllEmployeesRecord);
    mockGetAllEmployeesDataFromModel.mockImplementation(mockEmployeeRecord);
    const controllerResponse = await employeesController.getAllEmployees();

    expect(JSON.stringify(controllerResponse)).toEqual(JSON.stringify(mockGetAllEmployeesRecord));
  })
})
