import { GenericEntity } from 'src/generic/generic.entity';
import { Employee } from 'src/modules/employee/entities/employee.entity';
export declare class Attendance extends GenericEntity {
    employee_number: number;
    intime: Date;
    outtime: Date;
    attendance_date: string;
    type: string;
    employee: Employee;
}
