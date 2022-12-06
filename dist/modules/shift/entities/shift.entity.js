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
exports.Shift = void 0;
const generic_entity_1 = require("../../../generic/generic.entity");
const typeorm_1 = require("typeorm");
const employee_entity_1 = require("../../employee/entities/employee.entity");
let Shift = class Shift extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.Column)('time', { nullable: false }),
    __metadata("design:type", Date)
], Shift.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)('time', { nullable: false }),
    __metadata("design:type", Date)
], Shift.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 1 }),
    __metadata("design:type", String)
], Shift.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_entity_1.Employee, (employee) => employee.shift),
    __metadata("design:type", Array)
], Shift.prototype, "employee", void 0);
Shift = __decorate([
    (0, typeorm_1.Entity)('shifts')
], Shift);
exports.Shift = Shift;
//# sourceMappingURL=shift.entity.js.map