"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nullableFalseAttendanceEntity1654866774736 = void 0;
class nullableFalseAttendanceEntity1654866774736 {
    constructor() {
        this.name = 'nullableFalseAttendanceEntity1654866774736';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` CHANGE \`outtime\` \`outtime\` varchar(4) NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` CHANGE \`outtime\` \`outtime\` varchar(4) NOT NULL`);
    }
}
exports.nullableFalseAttendanceEntity1654866774736 = nullableFalseAttendanceEntity1654866774736;
//# sourceMappingURL=1654866774736-nullable-false-attendance-entity.js.map