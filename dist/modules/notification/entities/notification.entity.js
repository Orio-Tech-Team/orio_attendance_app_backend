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
exports.Notification = exports.NotificationType = void 0;
const generic_entity_1 = require("../../../generic/generic.entity");
const typeorm_1 = require("typeorm");
const employee_entity_1 = require("../../employee/entities/employee.entity");
var NotificationType;
(function (NotificationType) {
    NotificationType["CHECKIN"] = "check_in";
    NotificationType["CHECKOUT"] = "check_out";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
let Notification = class Notification extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Date)
], Notification.prototype, "notification_time", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: NotificationType,
        default: NotificationType.CHECKIN,
    }),
    __metadata("design:type", String)
], Notification.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], Notification.prototype, "employee_number", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, (employee) => employee.notification),
    (0, typeorm_1.JoinColumn)({
        name: 'employee_number',
        referencedColumnName: 'employee_number',
    }),
    __metadata("design:type", employee_entity_1.Employee)
], Notification.prototype, "employee", void 0);
Notification = __decorate([
    (0, typeorm_1.Entity)('notification')
], Notification);
exports.Notification = Notification;
//# sourceMappingURL=notification.entity.js.map