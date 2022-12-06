"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaNormal1656423230034 = void 0;
class schemaNormal1656423230034 {
    constructor() {
        this.name = 'schemaNormal1656423230034';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` DROP COLUMN \`fariha\``);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attendance\` ADD \`fariha\` varchar(255) NOT NULL`);
    }
}
exports.schemaNormal1656423230034 = schemaNormal1656423230034;
//# sourceMappingURL=1656423230034-schema-normal.js.map