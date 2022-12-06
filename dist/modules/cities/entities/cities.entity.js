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
exports.Cities = void 0;
const generic_entity_1 = require("../../../generic/generic.entity");
const typeorm_1 = require("typeorm");
const station_entity_1 = require("../../station/entities/station.entity");
let Cities = class Cities extends generic_entity_1.GenericEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        unique: true,
        length: 3
    }),
    __metadata("design:type", String)
], Cities.prototype, "city_code", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], Cities.prototype, "city_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => station_entity_1.Station, (station) => station.cities),
    __metadata("design:type", Array)
], Cities.prototype, "station", void 0);
Cities = __decorate([
    (0, typeorm_1.Entity)("cities")
], Cities);
exports.Cities = Cities;
//# sourceMappingURL=cities.entity.js.map