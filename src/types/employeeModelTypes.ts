import mongoose from "mongoose";

export interface Employee {
    description: string,
    dob: Date | string,
    name: string,
    lastUpdated?: Date | string,
    __v?: number
}

export interface EmployeeWithID extends Employee {
    _id: mongoose.Types.ObjectId | string
}

export type dbResponseFunction = () => EmployeeWithID