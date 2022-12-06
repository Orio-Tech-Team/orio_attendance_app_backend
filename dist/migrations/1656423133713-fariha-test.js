"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.farihaTest1656423133713 = void 0;
class farihaTest1656423133713 {
    constructor() {
        this.name = 'farihaTest1656423133713';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD \`fariha\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP COLUMN \`fariha\``);
    }
}
exports.farihaTest1656423133713 = farihaTest1656423133713;
//# sourceMappingURL=1656423133713-fariha-test.js.map