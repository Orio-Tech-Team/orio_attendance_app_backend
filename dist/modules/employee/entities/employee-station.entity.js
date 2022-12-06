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
exports.EmployeeStation = void 0;
const typeorm_1 = require("typeorm");
const generic_entity_1 = require("../../../generic/generic.entity");
const employee_entity_1 = require("./employee.entity");
const station_entity_1 = require("../../station/entities/station.entity");
let EmployeeStation = class EmployeeStation extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], EmployeeStation.prototype, "employee_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], EmployeeStation.prototype, "station_code", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, (employee) => employee.employee_station),
    (0, typeorm_1.JoinColumn)({ name: "employee_number", referencedColumnName: "employee_number" }),
    __metadata("design:type", employee_entity_1.Employee)
], EmployeeStation.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => station_entity_1.Station, (station) => station.employee_station),
    (0, typeorm_1.JoinColumn)({ name: "station_code", referencedColumnName: "station_code" }),
    __metadata("design:type", station_entity_1.Station)
], EmployeeStation.prototype, "station", void 0);
EmployeeStation = __decorate([
    (0, typeorm_1.Entity)('employee_stations')
], EmployeeStation);
exports.EmployeeStation = EmployeeStation;
//# sourceMappingURL=employee-station.entity.js.map