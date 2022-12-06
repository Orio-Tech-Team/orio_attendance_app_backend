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
exports.Station = void 0;
const typeorm_1 = require("typeorm");
const generic_entity_1 = require("../../../generic/generic.entity");
const cities_entity_1 = require("../../cities/entities/cities.entity");
const employee_station_entity_1 = require("../../employee/entities/employee-station.entity");
let Station = class Station extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], Station.prototype, "station_code", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], Station.prototype, "station_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Station.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Station.prototype, "longtitude", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", Number)
], Station.prototype, "radius", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], Station.prototype, "city_code", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cities_entity_1.Cities, (cities) => cities.station),
    (0, typeorm_1.JoinColumn)({ name: "city_code", referencedColumnName: "city_code" }),
    __metadata("design:type", cities_entity_1.Cities)
], Station.prototype, "cities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_station_entity_1.EmployeeStation, (employee_station) => employee_station.station),
    __metadata("design:type", Array)
], Station.prototype, "employee_station", void 0);
Station = __decorate([
    (0, typeorm_1.Entity)("stations")
], Station);
exports.Station = Station;
//# sourceMappingURL=station.entity.js.map