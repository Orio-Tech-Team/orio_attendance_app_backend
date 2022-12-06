import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
export declare class EmployeeService {
    private readonly employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    findByEmployee(employeeNumber: number): Promise<Employee[]>;
    findByShift(employeeNumber: number): Promise<Employee>;
    find(): Promise<Employee[]>;
}
