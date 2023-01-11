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
var moment = require("moment");
let AttendacneService = class AttendacneService {
    constructor(attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }
    async markAttendanceManually(employee, date, inTime, outTime) {
        const attendance = await this.getAttendance(employee.employee_number, date);
        let attendanceType = "Present";
        let shiftTime = employee.shift.start_time.toString();
        let shiftList = shiftTime.split(":");
        shiftList[1] = (+shiftList[1] + 10).toString();
        let graceTime = `${shiftList[0]}:${shiftList[1]}:${shiftList[2]}`;
        if (graceTime < inTime) {
            attendanceType = "Late";
        }
        else {
            attendanceType = "Present";
        }
        let newAttendance;
        if (attendance == true) {
            if (outTime == "") {
                newAttendance = await this.attendanceRepository.save(this.attendanceRepository.create({
                    employee_number: employee.employee_number,
                    attendance_date: date,
                    intime: inTime,
                    type: attendanceType,
                }));
            }
            else {
                newAttendance = await this.attendanceRepository.save(this.attendanceRepository.create({
                    employee_number: employee.employee_number,
                    attendance_date: date,
                    intime: inTime,
                    outtime: outTime,
                    type: attendanceType,
                }));
            }
            console.log(newAttendance);
        }
        else {
            if (outTime == "") {
                newAttendance = await this.attendanceRepository.save(Object.assign(Object.assign({}, attendance), { intime: inTime, type: attendanceType }));
            }
            else {
                newAttendance = await this.attendanceRepository.save(Object.assign(Object.assign({}, attendance), { intime: inTime, outtime: outTime, type: attendanceType }));
            }
        }
        return await this.getAttendanceById(newAttendance.id);
    }
    async markAttendance(employee) {
        const attendanceDate = await date_common_1.GetDate.currentDate();
        const attendance = await this.getAttendance(employee.employee_number, attendanceDate);
        const attendanceTime = date_common_1.GetDate.currentTime();
        let attendanceType = "Present";
        let shiftTime = employee.shift.start_time.toString();
        let shiftList = shiftTime.split(":");
        shiftList[1] = (+shiftList[1] + 10).toString();
        let graceTime = `${shiftList[0]}:${shiftList[1]}:${shiftList[2]}`;
        console.log(`attendance time ${attendanceTime}`);
        console.log(`shift time ${shiftTime}`);
        console.log(`grace time ${graceTime}`);
        if (graceTime < attendanceTime) {
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
                type: attendanceType,
            }));
        }
        else {
            newAttendance = await this.attendanceRepository.save(Object.assign(Object.assign({}, attendance), { outtime: attendanceTime }));
        }
        return await this.getAttendanceById(newAttendance.id);
    }
    async getAttendance(employeeNumber, attendanceDate) {
        return this.attendanceRepository
            .findOneOrFail({
            where: {
                employee_number: employeeNumber,
                attendance_date: attendanceDate,
            },
        })
            .catch((error) => {
            return true;
        });
    }
    async getAttendanceByMonth(getAttendanceDto, employeeNumber) {
        const attendance = await this.attendanceRepository
            .createQueryBuilder("attendance")
            .select([
            "attendance.employee_number,attendance.type,attendance.intime,attendance.outtime,date_format(attendance.attendance_date,'%Y-%m-%d') as attendance_date",
            "DATE_FORMAT(attendance_date, '%a') as day",
            "TIMEDIFF(outtime , intime) as working_hours",
        ])
            .where("employee_number = :employeeNumber AND DATE_FORMAT(attendance_date,'%Y-%m') = :attendanceDate", {
            attendanceDate: getAttendanceDto.attedance_date,
            employeeNumber: employeeNumber,
        })
            .getRawMany();
        return attendance;
    }
    async getAttendanceById(id) {
        return await this.attendanceRepository
            .createQueryBuilder("attendance")
            .select([
            "attendance.employee_number,attendance.type,attendance.intime,attendance.outtime,date_format(attendance.attendance_date,'%Y-%m-%d') as attendance_date",
            "DATE_FORMAT(attendance_date, '%a') as day",
            "TIMEDIFF(outtime , intime) as working_hours",
        ])
            .where("id = :id", {
            id: id,
        })
            .getRawOne();
    }
    async getAttendanceServerUpdate(getAttendanceServerData) {
        return await this.attendanceRepository.find({
            where: {
                updated_at: (0, typeorm_2.MoreThanOrEqual)(getAttendanceServerData.last_update),
            },
        });
    }
    async getAttendanceDataDto(getAttendanceDataDto) {
        let query = `SELECT e.id,e.shift_id,e.employee_number,e.employee_name,IFNULL(a.intime,0) as intime,IFNULL(a.outtime,0) as outtime,IFNULL(a.type,'Absent') as type,'${getAttendanceDataDto.from_date}' as attendance_date, IFNULL(TIMEDIFF(outtime,intime),0) as working_hours, CONCAT(s.start_time,' - ',s.end_time) as shift from employees e left JOIN attendance a on a.employee_number=e.employee_number and a.attendance_date='${getAttendanceDataDto.from_date}' left JOIN shifts s on s.id=e.shift_id`;
        if (!getAttendanceDataDto.employee_number) {
            return await (0, typeorm_3.getManager)().query(query);
        }
        else {
            query +=
                " WHERE e.employee_number ='" +
                    getAttendanceDataDto.employee_number +
                    "'";
            return await (0, typeorm_3.getManager)().query(query);
        }
    }
    async getAttendanceData(getAttendanceDto) {
        let query = `SELECT e.id,e.shift_id,e.employee_number,e.employee_name,IFNULL(a.intime,0) as intime,IFNULL(a.outtime,0) as outtime,IFNULL(a.type,'Absent') as type,DATE_FORMAT(a.attendance_date, '%Y-%m-%d') as attendance_date, IFNULL(TIMEDIFF(outtime,intime),0) as working_hours, CONCAT(s.start_time,' - ',s.end_time) as shift from employees e left JOIN attendance a on a.employee_number=e.employee_number  left JOIN shifts s on s.id=e.shift_id WHERE e.employee_number = '${getAttendanceDto.employee_number}'  and a.attendance_date BETWEEN '${getAttendanceDto.from_date}' AND '${getAttendanceDto.to_date}'`;
        var response = await (0, typeorm_3.getManager)().query(query);
        var data_to_send = [];
        if (response.length === 0) {
            response = await (0, typeorm_3.getManager)().query(`SELECT e.id,e.shift_id,e.employee_number,e.employee_name, CONCAT(s.start_time,' - ',s.end_time) as shift from employees e left JOIN shifts s on s.id=e.shift_id where e.employee_number="${getAttendanceDto.employee_number}"`);
        }
        const start = moment(getAttendanceDto.from_date);
        const end = moment(getAttendanceDto.to_date).add(1, "days");
        for (let m = start; m.isBefore(end); m.add(1, "days")) {
            var each_date = m.format("YYYY-MM-DD");
            var each_day = moment(each_date).day();
            var temp_data = response[0];
            const found_data = response.find((each_attendance) => each_attendance.attendance_date == each_date);
            if (each_day != 0 && each_day != 6) {
                if (found_data === undefined) {
                    {
                        data_to_send.push(Object.assign(Object.assign({}, temp_data), { intime: "00:00:00", outtime: "00:00:00", type: "Absent", attendance_date: each_date, working_hours: "00:00:00" }));
                    }
                }
                else {
                    data_to_send.push(found_data);
                }
            }
        }
        return data_to_send;
    }
};
AttendacneService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(attendacne_entity_1.Attendance)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AttendacneService);
exports.AttendacneService = AttendacneService;
//# sourceMappingURL=attendacne.service.js.map