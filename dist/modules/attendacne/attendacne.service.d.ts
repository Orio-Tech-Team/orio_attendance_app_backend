import { Attendance } from "./entities/attendacne.entity";
import { Repository } from "typeorm";
import { GetAttendanceDto } from "./dto/get-attendance.dto";
import { GetAttendanceServerDto } from "./dto/get-attendance-server.dto";
import { GetAttendanceDataDto } from "./dto/get-attendance-data.dto";
import { Employee } from "src/modules/employee/entities/employee.entity";
export declare class AttendacneService {
    private readonly attendanceRepository;
    constructor(attendanceRepository: Repository<Attendance>);
    markAttendanceManually(employee: Employee, date: string, inTime: string, outTime: any): Promise<any>;
    markAttendance(employee: Employee): Promise<any>;
    getAttendance(employeeNumber: number, attendanceDate: string): Promise<any>;
    getAttendanceByMonth(getAttendanceDto: GetAttendanceDto, employeeNumber: any): Promise<any[]>;
    getAttendanceById(id: any): Promise<any>;
    getAttendanceServerUpdate(getAttendanceServerData: GetAttendanceServerDto): Promise<Attendance[]>;
    getAttendanceDataDto(getAttendanceDataDto: GetAttendanceDataDto): Promise<any>;
}
