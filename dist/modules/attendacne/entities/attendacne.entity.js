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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attendance = void 0;
const generic_entity_1 = require("../../../generic/generic.entity");
const employee_entity_1 = require("../../employee/entities/employee.entity");
const typeorm_1 = require("typeorm");
let Attendance = class Attendance extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", Number)
], Attendance.prototype, "employee_number", void 0);
__decorate([
    (0, typeorm_1.Column)('time', {
        nullable: false
    }),
    __metadata("design:type", Date)
], Attendance.prototype, "intime", void 0);
__decorate([
    (0, typeorm_1.Column)('time', {
        nullable: true
    }),
    __metadata("design:type", Date)
], Attendance.prototype, "outtime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: "date"
    }),
    __metadata("design:type", String)
], Attendance.prototype, "attendance_date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], Attendance.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, (employee) => employee.attendance),
    (0, typeorm_1.JoinColumn)({ name: "employee_number", referencedColumnName: "employee_number" }),
    __metadata("design:type", employee_entity_1.Employee)
], Attendance.prototype, "employee", void 0);
Attendance = __decorate([
    (0, typeorm_1.Entity)('attendance')
], Attendance);
exports.Attendance = Attendance;
//# sourceMappingURL=attendacne.entity.js.map