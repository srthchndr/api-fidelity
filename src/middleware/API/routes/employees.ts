import express from 'express';
import EmployeesController from '../../../controllers/EmployeesController';
import errorResponseHandler from '../../../utils/errorResponseHandler';

const router = express.Router();
const employeesController = new EmployeesController();

router.get('/employees', async (request, response) => {
    try{
        const employees = await employeesController.getAllEmployees();

        return response.send(employees).status(200);
    }catch(error) {
        return errorResponseHandler(error, response);
    }

})

router.get('/employee/:id', async (request, response) => {
    try{
        const {
            params: { id }
        } = request;
    
        const employee = await employeesController.getEmployee(id);

        return response.json(employee).status(200);
    } catch(error) {
        return errorResponseHandler(error, response);
    }
})

router.post('/employee', async (request, response) => {
    try{
        const { body } = request;
    
        const employee = await employeesController.addEmployee(body);
    
        return response.send(employee).status(201);
    } catch(error) {
        return errorResponseHandler(error, response);
    }
})

router.put('/employee', async (request, response) => {
    try {
        const {body} = request;

        const employee = await employeesController.updateEmployee(body);
        return response.send(employee).status(200)
    } catch(error) {
        return errorResponseHandler(error, response);
    }

})

router.delete('/employee/:id', async (request, response) => {
    try {
        const {
            params: { id }
        } = request;
    
        const employee = await employeesController.deleteEmployee(id);
    
        return response.send(employee).status(employee._id? 200: 204);
    } catch(error) {
        return errorResponseHandler(error, response);
    }
})

export default router;