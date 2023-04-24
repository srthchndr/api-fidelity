import EmployeesModel from "../models/EmployeesModel";
import { Employee } from "../schemas/EmployeeSchema";
import { EmployeeWithID } from "../types/employeeModelTypes";

class EmployeesController {
    employeesModel: EmployeesModel
    constructor() {
        this.employeesModel = new EmployeesModel();
    }

    async addNewEmployee(employeeDetails: Employee) {
        const insertResult = await this.employeesModel.addEmployee(employeeDetails);
        return {_id: insertResult._id, name: insertResult.name, description: insertResult.description, dob: insertResult.dob}
    }

    async deleteEmployee(id: string) {
        const deleteResult = await this.employeesModel.removeEmployee(id);
        console.log(deleteResult);
        if(deleteResult.deletedCount === 1) {
            return {_id: id};
        }
        return {_id: null};
    }

    async updateEmployeeDetails(updatedDetails: EmployeeWithID) {
        const updateResult = await this.employeesModel.updateEmployee(updatedDetails);
        return {_id: updateResult?._id, name: updateResult?.name, description: updateResult?.description, dob: updateResult?.dob}
    }

    async getEmployeeDetails (id: string) {
        return this.employeesModel.getEmployee(id);
    }

    async getAllEmployeesDetails () {
        return this.employeesModel.getAllEmployees();
    }
}

export default EmployeesController;