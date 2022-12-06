import { GenericEntity } from 'src/generic/generic.entity';
import { Employee } from './employee.entity';
import { Station } from "src/modules/station/entities/station.entity";
export declare class EmployeeStation extends GenericEntity {
    employee_number: number;
    station_code: string;
    employee: Employee;
    station: Station;
}
