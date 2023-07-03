import { requires, requiresNonNullish } from "ts-code-contracts";
import EmployeesModel from "../models/EmployeesModel";
import { Employee, EmployeeWithID } from "../types/employeeModelTypes";

class EmployeesController {
    employeesModel: EmployeesModel
    constructor() {
        this.employeesModel = new EmployeesModel();
    }

    async addEmployee(employeeDetails: Employee) : Promise<EmployeeWithID> {
        requires(employeeDetails.name !== '' && employeeDetails.description !== '' && employeeDetails.dob !== '', "Name, Description or DOB should not be empty");
        requiresNonNullish(employeeDetails, 'Name, Description or DOB can not be null');

        const insertResult = await this.employeesModel.addEmployee(employeeDetails);
        return {_id: insertResult._id.toString(), name: insertResult.name, description: insertResult.description, dob: insertResult.dob}
    }

    async deleteEmployee(id: string) : Promise<{_id: null | string}> {
        requires(id !== '', 'Need employeeID to delete');
        requiresNonNullish(id, 'Employee ID can not be null')

        const deleteResult = await this.employeesModel.deleteEmployee(id);
        if(deleteResult.deletedCount === 1) {
            return {_id: id};
        }
        return {_id: null};
    }

    async updateEmployee(updatedDetails: EmployeeWithID) : Promise<EmployeeWithID> {
        requires(updatedDetails.name !== '' && updatedDetails.description !== '' && updatedDetails.dob !== '', "Name, Description, DOB should have values");
        requiresNonNullish(updatedDetails, 'updatedDetails can not be null');
        const updateResult = await this.employeesModel.updateEmployee(updatedDetails);
        return {_id: updateResult!._id, name: updateResult!.name, description: updateResult!.description, dob: updateResult!.dob, lastUpdated: updateResult!.lastUpdated}
    }

    async getEmployee (id: string) : Promise<EmployeeWithID | null | undefined> {
        requiresNonNullish(id, 'EmployeeID cannot be null to get a single employee')
        return this.employeesModel.getEmployee(id);
    }

    async getAllEmployees () : Promise<EmployeeWithID[]> {
        return this.employeesModel.getAllEmployees();
    }
}

export default EmployeesController;