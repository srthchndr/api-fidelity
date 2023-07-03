export const mockAddEmployeeRequest = {
    name:"Justin",
    description:"This is Justin's description",
    dob:"1990-06-01"
}

export const expectedAddEmployeeController = {
    _id: "648e7a4c187643b6c1fd1e3b",
    name: 'Justin',
    description: "This is Justin's description",
    dob: new Date('2023-06-04T00:00:00.000Z')
}

export const mockAddEmployeeModelResponse = {
    description: "This is Justin's description",
    dob: new Date('2023-06-04T00:00:00.000Z'),
    lastUpdated: new Date('2023-06-18T03:30:20.413Z'),
    name: 'Justin',
    _id: "648e7a4c187643b6c1fd1e3b",
    __v: 0
}