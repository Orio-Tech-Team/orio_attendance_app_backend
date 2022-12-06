"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changesAttendanceEntity1654862831763 = void 0;
class changesAttendanceEntity1654862831763 {
    constructor() {
        this.name = 'changesAttendanceEntity1654862831763';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP COLUMN \`attendace_date\``);
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD \`attendance_date\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP FOREIGN KEY \`FK_16d95b1807e9631d4c1705e4868\``);
        await queryRunner.query(`ALTER TABLE \`attendance\` CHANGE \`employee_number\` \`employee_number\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD CONSTRAINT \`FK_16d95b1807e9631d4c1705e4868\` FOREIGN KEY (\`employee_number\`) REFERENCES \`employees\`(\`employee_number\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP FOREIGN KEY \`FK_16d95b1807e9631d4c1705e4868\``);
        await queryRunner.query(`ALTER TABLE \`attendance\` CHANGE \`employee_number\` \`employee_number\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD CONSTRAINT \`FK_16d95b1807e9631d4c1705e4868\` FOREIGN KEY (\`employee_number\`) REFERENCES \`employees\`(\`employee_number\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP COLUMN \`attendance_date\``);
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD \`attendace_date\` datetime NOT NULL`);
    }
}
exports.changesAttendanceEntity1654862831763 = changesAttendanceEntity1654862831763;
//# sourceMappingURL=1654862831763-changes-attendance-entity.js.map