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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const data_not_found_exception_1 = require("../../Helper/Exception/data-not-found.exception");
const typeorm_2 = require("typeorm");
const employee_entity_1 = require("./entities/employee.entity");
let EmployeeService = class EmployeeService {
    constructor(connection, employeeRepository) {
        this.connection = connection;
        this.employeeRepository = employeeRepository;
    }
    async findByEmployee(employeeNumber) {
        return await this.employeeRepository.find({
            where: {
                employee_number: employeeNumber,
            },
            relations: ["employee_station", "employee_station.station"],
        });
    }
    async findByShift(employeeNumber) {
        return this.employeeRepository
            .findOneOrFail({
            relations: ["shift"],
            where: {
                employee_number: employeeNumber,
            },
        })
            .catch((error) => {
            throw data_not_found_exception_1.DataNotFoundException.exception("Invalid Employee");
        });
    }
    async findEmployee() {
        return this.connection.query("SELECT employee_number, employee_name FROM employees");
    }
    async find() {
        return this.employeeRepository.find({
            where: {
                is_deleted: false,
            },
        });
    }
};
EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectConnection)()),
    __param(1, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Connection,
        typeorm_2.Repository])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map