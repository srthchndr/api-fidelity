import { Model, model } from "mongoose";
import { EmployeeWithID } from "../types/employeeModelTypes";
import { Employee, EmployeeSchema } from "../schemas/EmployeeSchema";

const Employee = model<Employee>('Employee', EmployeeSchema);

class EmployeesModel{
    async addEmployee(employeeDetails: Employee) {
        const {name, dob, description, lastUpdated} = employeeDetails;
        const employee = new Employee({name, dob, description, lastUpdated});

        await employee.save();
        console.log(employee);
        return employee;
    }

    async removeEmployee(employeeId: string) {
        return Employee.deleteOne({_id: employeeId}).exec();
    }

    async getAllEmployees() {
        return Employee.find({});
    }

    async updateEmployee(updatedEmployeeDetails: EmployeeWithID) {
        const {_id, name, dob, description, lastUpdated} = updatedEmployeeDetails;
        const employee = await Employee.findByIdAndUpdate(_id, {name, dob, description, lastUpdated});
console.log(employee);
        return employee
    }

    async getEmployee(employeeId: string) {
        return Employee.findOne({_id: employeeId})
    }

}

export default EmployeesModel;