import express from 'express';
import EmployeesController from '../../../controllers/EmployeesController';
import errorResponseHandler from '../../../utils/errorResponseHandler';

const router = express.Router();
const employeesController = new EmployeesController();

router.get('/employees', async (request, response) => {
    try{
        const employeesDetails = await employeesController.getAllEmployeesDetails();

        return response.send(employeesDetails).status(200);
    }catch(error) {
        return errorResponseHandler(error, response);
    }

})

router.get('/employee/:id', async (request, response) => {
    try{
        const {
            params: { id }
        } = request;
    
        const employeeDetails = employeesController.getEmployeeDetails(id);
    
        return response.json(employeeDetails).status(200);
    } catch(error) {
        return errorResponseHandler(error, response);
    }
})

router.post('/employee', async (request, response) => {
    try{
        const { body } = request;
    
        console.log(body, 'This is request body');
        const insertResult = await employeesController.addNewEmployee(body);
    
        return response.send(insertResult).status(201);
    } catch(error) {
        return errorResponseHandler(error, response);
    }
})

router.put('/employee', async (request, response) => {
    try {
        const {body} = request;

    console.log(request.params)
    
    const updateResult = await employeesController.updateEmployeeDetails(body);

    return response.send(updateResult).status(200)
    } catch(error) {
        return errorResponseHandler(error, response);
    }

})

router.delete('/employee/:id', async (request, response) => {
    try {
        const {
            params: { id }
        } = request;
    
        const deleteResult = await employeesController.deleteEmployee(id);
    
        return response.send(deleteResult).status(deleteResult._id? 200: 204);
    } catch(error) {
        return errorResponseHandler(error, response);
    }
})

export default router;