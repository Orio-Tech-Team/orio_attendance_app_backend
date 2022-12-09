import { GenericEntity } from "src/generic/generic.entity";
import { Attendance } from "src/modules/attendacne/entities/attendacne.entity";
import { EmployeeStation } from "./employee-station.entity";
import { Shift } from "../../shift/entities/shift.entity";
import { Notification } from 'src/modules/notification/entities/notification.entity';
export declare class Employee extends GenericEntity {
    employee_number: number;
    employee_name: string;
    attendance: Attendance[];
    employee_station: EmployeeStation[];
    shift: Shift;
    notification: Notification[];
}
