import { GenericEntity } from 'src/generic/generic.entity';
import { Employee } from 'src/modules/employee/entities/employee.entity';
export declare enum NotificationType {
    CHECKIN = "check_in",
    CHECKOUT = "check_out"
}
export declare class Notification extends GenericEntity {
    notification_time: Date;
    type: string;
    employee_number: number;
    employee: Employee;
}
