import { EmployeeService } from '../employee/employee.service';
import { NotificationService } from './notification.service';
export declare class NotificationController {
    private readonly notificationService;
    private readonly employeeService;
    constructor(notificationService: NotificationService, employeeService: EmployeeService);
    createNotification(request: any): Promise<any>;
}
