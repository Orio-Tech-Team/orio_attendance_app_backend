"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTypeStarttimeandendtimeToTimeShiftEntity1655390917802 = void 0;
class updateTypeStarttimeandendtimeToTimeShiftEntity1655390917802 {
    constructor() {
        this.name = 'updateTypeStarttimeandendtimeToTimeShiftEntity1655390917802';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`shifts\` DROP COLUMN \`start_time\``);
        await queryRunner.query(`ALTER TABLE \`shifts\` ADD \`start_time\` time NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`shifts\` DROP COLUMN \`end_time\``);
        await queryRunner.query(`ALTER TABLE \`shifts\` ADD \`end_time\` time NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`shifts\` DROP COLUMN \`end_time\``);
        await queryRunner.query(`ALTER TABLE \`shifts\` ADD \`end_time\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`shifts\` DROP COLUMN \`start_time\``);
        await queryRunner.query(`ALTER TABLE \`shifts\` ADD \`start_time\` varchar(255) NOT NULL`);
    }
}
exports.updateTypeStarttimeandendtimeToTimeShiftEntity1655390917802 = updateTypeStarttimeandendtimeToTimeShiftEntity1655390917802;
//# sourceMappingURL=1655390917802-update-type-starttimeandendtime-to-time-shift-entity.js.map