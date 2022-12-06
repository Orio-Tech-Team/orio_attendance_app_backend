"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendacneModule = void 0;
const common_1 = require("@nestjs/common");
const attendacne_service_1 = require("./attendacne.service");
const attendacne_controller_1 = require("./attendacne.controller");
const typeorm_1 = require("@nestjs/typeorm");
const attendacne_entity_1 = require("./entities/attendacne.entity");
const employee_service_1 = require("../employee/employee.service");
const employee_entity_1 = require("../employee/entities/employee.entity");
let AttendacneModule = class AttendacneModule {
};
AttendacneModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([attendacne_entity_1.Attendance, employee_entity_1.Employee])],
        controllers: [attendacne_controller_1.AttendacneController],
        providers: [attendacne_service_1.AttendacneService, employee_service_1.EmployeeService]
    })
], AttendacneModule);
exports.AttendacneModule = AttendacneModule;
//# sourceMappingURL=attendacne.module.js.map