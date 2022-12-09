import { Repository } from 'typeorm';
import { Employee } from '../employee/entities/employee.entity';
import { Notification, NotificationType } from './entities/notification.entity';
export declare class NotificationService {
    private readonly notificationRepository;
    constructor(notificationRepository: Repository<Notification>);
    createNotification(employee: Employee, type: NotificationType): Promise<any>;
}
