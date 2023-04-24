import mongoose, { Schema } from "mongoose";

export interface Employee {
    description: string,
    dob: Date,
    name: string,
    lastUpdated: Date
}

export const EmployeeSchema = new Schema<Employee>({
    description: String,
    dob: {type: Date},
    lastUpdated: {type: Date, default: Date.now},
    name: String,
})
