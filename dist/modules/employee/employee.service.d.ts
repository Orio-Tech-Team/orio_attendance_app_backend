import { Connection, Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";
export declare class EmployeeService {
    private readonly connection;
    private readonly employeeRepository;
    constructor(connection: Connection, employeeRepository: Repository<Employee>);
    findByEmployee(employeeNumber: number): Promise<Employee[]>;
    findByShift(employeeNumber: number): Promise<Employee>;
    findEmployee(): Promise<any>;
    find(): Promise<Employee[]>;
}
