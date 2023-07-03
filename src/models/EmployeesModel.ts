import { Model, model } from "mongoose";
import { Employee, EmployeeWithID, dbResponseFunction } from "../types/employeeModelTypes";
import { EmployeeSchema } from "../schemas/EmployeeSchema";

const EmployeeDocument = model<Employee>('Employee', EmployeeSchema);

class EmployeesModel{
    async addEmployee(employeeDetails: Employee): Promise<EmployeeWithID> {
        const {name, dob, description, lastUpdated} = employeeDetails;
        const employee = new EmployeeDocument({name, dob, description, lastUpdated});
        const result = (await employee.save());
        return result.toObject()
    }

    async deleteEmployee(employeeId: string) {
        return EmployeeDocument.deleteOne({_id: employeeId}).exec();
    }

    async getAllEmployees(): Promise<EmployeeWithID[]> {
        return await EmployeeDocument.find({});
    }

    async updateEmployee(updatedEmployeeDetails: EmployeeWithID): Promise<EmployeeWithID | null | undefined> {
        const {_id, name, dob, description, lastUpdated} = updatedEmployeeDetails;
        const result = await EmployeeDocument.findByIdAndUpdate(_id, {name, dob, description, lastUpdated}, {new: true});
        return result?.toObject()
    }

    async getEmployee(employeeId: string): Promise<EmployeeWithID | null | undefined> {
        console.log(employeeId, "Inside model")
        return (await EmployeeDocument.findOne({_id: employeeId}))?.toObject()
    }

}

export default EmployeesModel;