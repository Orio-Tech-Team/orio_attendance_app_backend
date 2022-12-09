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
exports.Employee = void 0;
const generic_entity_1 = require("../../../generic/generic.entity");
const attendacne_entity_1 = require("../../attendacne/entities/attendacne.entity");
const typeorm_1 = require("typeorm");
const employee_station_entity_1 = require("./employee-station.entity");
const shift_entity_1 = require("../../shift/entities/shift.entity");
const notification_entity_1 = require("../../notification/entities/notification.entity");
let Employee = class Employee extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", Number)
], Employee.prototype, "employee_number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], Employee.prototype, "employee_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => attendacne_entity_1.Attendance, (attendance) => attendance.employee),
    __metadata("design:type", Array)
], Employee.prototype, "attendance", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_station_entity_1.EmployeeStation, (employee_station) => employee_station.employee),
    __metadata("design:type", Array)
], Employee.prototype, "employee_station", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shift_entity_1.Shift, (shift) => shift.employee),
    (0, typeorm_1.JoinColumn)({ name: "shift_id" }),
    __metadata("design:type", shift_entity_1.Shift)
], Employee.prototype, "shift", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => notification_entity_1.Notification, (notification) => notification.employee),
    __metadata("design:type", Array)
], Employee.prototype, "notification", void 0);
Employee = __decorate([
    (0, typeorm_1.Entity)("employees")
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=employee.entity.js.map