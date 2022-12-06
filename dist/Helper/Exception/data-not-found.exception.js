"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class DataNotFoundException {
    static exception(errorMessage) {
        throw new common_1.HttpException({
            message: errorMessage
        }, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.DataNotFoundException = DataNotFoundException;
//# sourceMappingURL=data-not-found.exception.js.map