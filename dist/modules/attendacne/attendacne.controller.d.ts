import { EmployeeService } from "../employee/employee.service";
import { AttendacneService } from "./attendacne.service";
import { GetAttendanceServerDto } from "./dto/get-attendance-server.dto";
import { GetAttendanceDto } from "./dto/get-attendance.dto";
import { GetAttendanceDataDto } from "./dto/get-attendance-data.dto";
export declare class AttendacneController {
    private readonly attendacneService;
    private readonly employeeService;
    constructor(attendacneService: AttendacneService, employeeService: EmployeeService);
    markAttendance(request: any): Promise<any>;
    markAttendanceManually(request: any): Promise<any>;
    getAttendance(getAttendanceDto: GetAttendanceDto, request: any): Promise<any[]>;
    getAttendanceServer(getAttenadanceServerData: GetAttendanceServerDto): Promise<import("./entities/attendacne.entity").Attendance[]>;
    function(getAttendanceDataDto: GetAttendanceDataDto): Promise<any>;
    getAttendanceData(getAttendanceDataDto: GetAttendanceDataDto): Promise<any[]>;
}
