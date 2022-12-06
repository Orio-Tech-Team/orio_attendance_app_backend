"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTypeAttendanceEntity1655305319416 = void 0;
class addTypeAttendanceEntity1655305319416 {
    constructor() {
        this.name = 'addTypeAttendanceEntity1655305319416';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD \`type\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP COLUMN \`type\``);
    }
}
exports.addTypeAttendanceEntity1655305319416 = addTypeAttendanceEntity1655305319416;
//# sourceMappingURL=1655305319416-add-type-attendance-entity.js.map