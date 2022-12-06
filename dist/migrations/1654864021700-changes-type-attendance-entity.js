"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changesTypeAttendanceEntity1654864021700 = void 0;
class changesTypeAttendanceEntity1654864021700 {
    constructor() {
        this.name = 'changesTypeAttendanceEntity1654864021700';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP COLUMN \`intime\``);
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD \`intime\` varchar(4) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP COLUMN \`outtime\``);
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD \`outtime\` varchar(4) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP COLUMN \`outtime\``);
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD \`outtime\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP COLUMN \`intime\``);
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD \`intime\` int NOT NULL`);
    }
}
exports.changesTypeAttendanceEntity1654864021700 = changesTypeAttendanceEntity1654864021700;
//# sourceMappingURL=1654864021700-changes-type-attendance-entity.js.map