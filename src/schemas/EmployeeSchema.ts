import mongoose, { Schema } from "mongoose";
import { Employee } from "../types/employeeModelTypes";

export const EmployeeSchema = new Schema<Employee>({
    description: String,
    dob: {type: Date},
    lastUpdated: {type: Date, default: Date.now},
    name: String,
})
