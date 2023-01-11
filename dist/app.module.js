"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const token_middleware_1 = require("./middlewares/token.middleware");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const employee_module_1 = require("./modules/employee/employee.module");
const station_module_1 = require("./modules/station/station.module");
const attendacne_module_1 = require("./modules/attendacne/attendacne.module");
const cities_module_1 = require("./modules/cities/cities.module");
const notification_module_1 = require("./modules/notification/notification.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(token_middleware_1.TokenMiddleware)
            .exclude({
            path: "/attendance-app/attendance/server",
            method: common_1.RequestMethod.ALL,
        }, {
            path: "/attendance-app/employee/get-employee",
            method: common_1.RequestMethod.GET,
        }, {
            path: "/attendance-app/attendance/getattendancedata",
            method: common_1.RequestMethod.ALL,
        }, {
            path: "/attendance-app/attendance/get-attendance-data",
            method: common_1.RequestMethod.POST,
        }, {
            path: "/attendance-app/attendance/manual",
            method: common_1.RequestMethod.ALL,
        }, { path: "/attendance-app/employee/all", method: common_1.RequestMethod.ALL }, { path: "/attendance-app/shift/all", method: common_1.RequestMethod.ALL })
            .forRoutes({ path: "*", method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync(typeorm_config_1.typeOrmAsyncConfig),
            employee_module_1.EmployeeModule,
            station_module_1.StationModule,
            attendacne_module_1.AttendacneModule,
            cities_module_1.CitiesModule,
            notification_module_1.NotificationModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map