import httpMocks from 'node-mocks-http';
import { jest, describe, it, expect, afterAll, beforeEach } from '@jest/globals';
import EmployeesController from '../../../controllers/EmployeesController';
import { mockGetAllEmployeesRecord, mockGetEmployeeRecord } from '../../../mocks/GetEmployeesMock';
import { expectedAddEmployeeController, mockAddEmployeeRequest } from '../../../mocks/CreateEmployeeMock';
import { expectedUpdateControllerResponse, mockUpdateEmployeeControllerRequest } from '../../../mocks/UpdateEmployeeMock';
import request from 'supertest';
import { app } from '../../..';

jest.mock('../../../controllers/EmployeesController');

const mockGetAllEmployeesDataFromController = jest.spyOn(EmployeesController.prototype, 'getAllEmployees').mockImplementation(async () => mockGetAllEmployeesRecord);
const mockAddEmployeeDataFromController = jest.spyOn(EmployeesController.prototype, 'addEmployee').mockImplementation(async () => expectedAddEmployeeController);
const mockDeleteEmployeeDataFromController = jest.spyOn(EmployeesController.prototype, 'deleteEmployee').mockImplementation(async () => {return {_id: '123'}});
const mockUpdateEmployeeDataFromController = jest.spyOn(EmployeesController.prototype, 'updateEmployee').mockImplementation(async () => expectedUpdateControllerResponse);
const mockGetEmployeeDataFromController = jest.spyOn(EmployeesController.prototype, 'getEmployee').mockImplementation(async () => mockGetEmployeeRecord);

describe('Route handlers tests', () => {
    it('GET /employees', async () => {
        await request(app).get('/api/employees').expect(200).then((response) => {
            expect(response.body.length).toEqual(3);
        })
    });

    it('GET /employee/123', async() => {
        await request(app).get('/api/employee/123').expect(200).then((res) => {
            expect(res.body._id).toBe('123');
            expect(res.body.name).toBe('Test');
        });
    });

    it('POST /employee', async() => {
        await request(app).post('/api/employee').send(mockAddEmployeeRequest).expect(200).then((res) => {
            expect(res.body._id).toBe('648e7a4c187643b6c1fd1e3b');
            expect(res.body.description).toBe(`This is Justin's description`);
            expect(res.body.name).toBe('Justin');
            expect(res.body.dob).toBe('2023-06-04T00:00:00.000Z');
        });
    });

    it('PUT /employee', async() => {
        await request(app).put('/api/employee').send(mockUpdateEmployeeControllerRequest).expect(200).then((res) => {
            expect(res.body._id).toBe('123');
            expect(res.body.description).toBe('Description');
            expect(res.body.dob).toBe('1990-01-01T00:00:00.000Z');
        });
    });
    
    it('DELETE /employees', async () => {
        await request(app).delete('/api/employee/123').expect(200).expect((res) => {
            expect(res.body._id).toBe('123'); 
        });
    });
})

