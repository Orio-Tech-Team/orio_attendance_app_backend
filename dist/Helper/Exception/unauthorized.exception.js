"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAuthorizedException = void 0;
const common_1 = require("@nestjs/common");
class UnAuthorizedException {
    static exception(errorMessage) {
        throw new common_1.HttpException({
            message: errorMessage
        }, common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.UnAuthorizedException = UnAuthorizedException;
//# sourceMappingURL=unauthorized.exception.js.map