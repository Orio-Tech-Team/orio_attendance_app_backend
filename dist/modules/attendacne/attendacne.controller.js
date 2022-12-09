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
exports.AttendacneController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const employee_service_1 = require("../employee/employee.service");
const attendacne_service_1 = require("./attendacne.service");
const get_attendance_server_dto_1 = require("./dto/get-attendance-server.dto");
const get_attendance_dto_1 = require("./dto/get-attendance.dto");
const get_attendance_data_dto_1 = require("./dto/get-attendance-data.dto");
let AttendacneController = class AttendacneController {
    constructor(attendacneService, employeeService) {
        this.attendacneService = attendacneService;
        this.employeeService = employeeService;
    }
    async markAttendance(request) {
        const employeeNumber = request.user_information.refrence_number;
        const employee = await this.employeeService.findByShift(employeeNumber);
        return await this.attendacneService.markAttendance(employee);
    }
    async markAttendanceManually(request) {
        const employeeNumber = request.body.emp_id;
        const employee = await this.employeeService.findByShift(employeeNumber);
        const date = request.body.date;
        const inTime = request.body.in_time;
        const outTime = request.body.out_time;
        return await this.attendacneService.markAttendanceManually(employee, date, inTime, outTime);
    }
    async getAttendance(getAttendanceDto, request) {
        const employeeNumber = request.user_information.refrence_number;
        return await this.attendacneService.getAttendanceByMonth(getAttendanceDto, employeeNumber);
    }
    async getAttendanceServer(getAttenadanceServerData) {
        return await this.attendacneService.getAttendanceServerUpdate(getAttenadanceServerData);
    }
    async function(getAttendanceDataDto) {
        return await this.attendacneService.getAttendanceDataDto(getAttendanceDataDto);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)("JWT-auth"),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AttendacneController.prototype, "markAttendance", null);
__decorate([
    (0, common_1.Post)("manual"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AttendacneController.prototype, "markAttendanceManually", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)("JWT-auth"),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_attendance_dto_1.GetAttendanceDto, Object]),
    __metadata("design:returntype", Promise)
], AttendacneController.prototype, "getAttendance", null);
__decorate([
    (0, common_1.Post)("server"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_attendance_server_dto_1.GetAttendanceServerDto]),
    __metadata("design:returntype", Promise)
], AttendacneController.prototype, "getAttendanceServer", null);
__decorate([
    (0, common_1.Post)("getattendancedata"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_attendance_data_dto_1.GetAttendanceDataDto]),
    __metadata("design:returntype", Promise)
], AttendacneController.prototype, "function", null);
AttendacneController = __decorate([
    (0, common_1.Controller)("attendance"),
    __metadata("design:paramtypes", [attendacne_service_1.AttendacneService,
        employee_service_1.EmployeeService])
], AttendacneController);
exports.AttendacneController = AttendacneController;
//# sourceMappingURL=attendacne.controller.js.map