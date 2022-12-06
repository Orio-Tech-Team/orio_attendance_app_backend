import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    findByEmployee(req: any): Promise<any>;
    find(req: any): Promise<Employee[]>;
}
