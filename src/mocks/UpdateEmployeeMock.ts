import mongoose from "mongoose";

export const mockUpdateEmployeeHTTPRequest = {}

export const mockUpdateEmployeeControllerResponse = {}

export const mockUpdateEmployeeControllerRequest = {
    _id: '123',
    description: 'Description',
    dob: '1990-01-01',
    lastUpdated: '2021-01-01T01:00:00.000Z',
    name: 'Test',
    __v: 0
}

export const expectedUpdateControllerResponse = {
    _id: '123',
    name: 'Test',
    description: 'Description',
    dob: new Date('1990-01-01T00:00:00.000Z'),
    lastUpdated: new Date('2021-01-01T01:00:00.000Z')
}

export const mockUpdateEmployeeModelResponse = {
    ...expectedUpdateControllerResponse,
    __v: 0
}