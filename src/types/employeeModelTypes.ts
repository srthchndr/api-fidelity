import { Employee } from "../schemas/EmployeeSchema";

export interface EmployeeWithID extends Employee {
    _id: string
}