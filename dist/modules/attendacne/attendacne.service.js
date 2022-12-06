"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendacneService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const attendacne_entity_1 = require("./entities/attendacne.entity");
const typeorm_2 = require("typeorm");
const date_common_1 = require("../../Helper/common/date.common");
const typeorm_3 = require("typeorm");
let AttendacneService = class AttendacneService {
    constructor(attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }
    async markAttendance(employee) {
        const attendanceDate = await date_common_1.GetDate.currentDate();
        const attendance = await this.getAttendance(employee.employee_number, attendanceDate);
        const attendanceTime = date_common_1.GetDate.currentTime().toString();
        let attendanceType = "Present";
        if ((employee.shift.start_time).toString() < attendanceTime) {
            attendanceType = "Late";
        }
        else {
            attendanceType = "Present";
        }
        let newAttendance;
        if (attendance == true) {
            newAttendance = await this.attendanceRepository.save(this.attendanceRepository.create({
                employee_number: employee.employee_number,
                attendance_date: attendanceDate,
                intime: attendanceTime,
                type: attendanceType
            }));
        }
        else {
            newAttendance = await this.attendanceRepository.save(Object.assign(Object.assign({}, attendance), { outtime: attendanceTime }));
        }
        return await this.getAttendanceById(newAttendance.id);
    }
    async getAttendance(employeeNumber, attendanceDate) {
        return this.attendanceRepository.findOneOrFail({
            where: {
                employee_number: employeeNumber,
                attendance_date: attendanceDate
            }
        }).catch(error => {
            return true;
        });
    }
    async getAttendanceByMonth(getAttendanceDto, employeeNumber) {
        const attendance = await this.attendanceRepository.createQueryBuilder('attendance').
            select(["attendance.employee_number,attendance.type,attendance.intime,attendance.outtime,date_format(attendance.attendance_date,'%Y-%m-%d') as attendance_date", "DATE_FORMAT(attendance_date, '%a') as day", "TIMEDIFF(outtime , intime) as working_hours"]).
            where("employee_number = :employeeNumber AND DATE_FORMAT(attendance_date,'%Y-%m') = :attendanceDate", {
            attendanceDate: getAttendanceDto.attedance_date,
            employeeNumber: employeeNumber
        }).
            getRawMany();
        return attendance;
    }
    async getAttendanceById(id) {
        return await this.attendanceRepository.createQueryBuilder('attendance').
            select(["attendance.employee_number,attendance.type,attendance.intime,attendance.outtime,date_format(attendance.attendance_date,'%Y-%m-%d') as attendance_date", "DATE_FORMAT(attendance_date, '%a') as day", "TIMEDIFF(outtime , intime) as working_hours"]).
            where("id = :id", {
            id: id
        }).
            getRawOne();
    }
    async getAttendanceServerUpdate(getAttendanceServerData) {
        return await this.attendanceRepository.find({
            where: {
                updated_at: (0, typeorm_2.MoreThanOrEqual)(getAttendanceServerData.last_update)
            }
        });
    }
    async getAttendanceDataDto(getAttendanceDataDto) {
        let query = "SELECT employees.* , IFNULL(attendance.intime,'00:00:00') as intime , IFNULL(attendance.outtime, '00:00:00') as outtime , DATE_FORMAT(employees.attendance_date, '%a') as day , (CASE WHEN attendance.type IS NULL AND DATE_FORMAT(employees.attendance_date,'%a') IN ('Sat','Sun') THEN 'Holiday' WHEN attendance.type IS NULL THEN 'Absent' ELSE attendance.type END) as type , TIMEDIFF(IFNULL(outtime,'00:00:00') , IFNULL(intime,'00:00:00')) as working_hours FROM attendance RIGHT JOIN (SELECT employees.employee_number ,employees.employee_name , v.selected_date as attendance_date FROM (SELECT ADDDATE('1970-01-01',t4.i*10000 + t3.i*1000 + t2.i*100 + t1.i*10 + t0.i) selected_date FROM (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t0,(SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t1,(SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t2,(SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t3,(SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t4) v , employees WHERE selected_date BETWEEN '" + getAttendanceDataDto.from_date + "' AND '" + getAttendanceDataDto.to_date + "') employees ON attendance.attendance_date = employees.attendance_date AND attendance.employee_number = employees.employee_number";
        if (!getAttendanceDataDto.employee_number) {
            return await (0, typeorm_3.getManager)().query(query);
        }
        else {
            query += " WHERE employees.employee_number ='" + getAttendanceDataDto.employee_number + "'";
            return await (0, typeorm_3.getManager)().query(query);
        }
    }
};
AttendacneService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(attendacne_entity_1.Attendance)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AttendacneService);
exports.AttendacneService = AttendacneService;
//# sourceMappingURL=attendacne.service.js.map