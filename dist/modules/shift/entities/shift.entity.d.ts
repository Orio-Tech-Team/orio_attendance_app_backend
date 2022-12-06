import { GenericEntity } from "src/generic/generic.entity";
import { Employee } from '../../employee/entities/employee.entity';
export declare class Shift extends GenericEntity {
    start_time: Date;
    end_time: Date;
    type: string;
    employee: Employee[];
}
