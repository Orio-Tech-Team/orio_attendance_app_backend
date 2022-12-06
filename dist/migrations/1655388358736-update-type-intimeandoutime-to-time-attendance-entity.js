"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTypeIntimeandoutimeToTimeAttendanceEntity1655388358736 = void 0;
class updateTypeIntimeandoutimeToTimeAttendanceEntity1655388358736 {
    constructor() {
        this.name = 'updateTypeIntimeandoutimeToTimeAttendanceEntity1655388358736';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP COLUMN \`intime\``);
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD \`intime\` time NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP COLUMN \`outtime\``);
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD \`outtime\` time NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP COLUMN \`outtime\``);
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD \`outtime\` varchar(4) NULL`);
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP COLUMN \`intime\``);
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD \`intime\` varchar(4) NOT NULL`);
    }
}
exports.updateTypeIntimeandoutimeToTimeAttendanceEntity1655388358736 = updateTypeIntimeandoutimeToTimeAttendanceEntity1655388358736;
//# sourceMappingURL=1655388358736-update-type-intimeandoutime-to-time-attendance-entity.js.map