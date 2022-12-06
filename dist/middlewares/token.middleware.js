"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenMiddleware = void 0;
const common_1 = require("@nestjs/common");
const unauthorized_exception_1 = require("../Helper/Exception/unauthorized.exception");
const jwt = require('jsonwebtoken');
let TokenMiddleware = class TokenMiddleware {
    use(req, res, next) {
        try {
            let token = req.headers.authorization;
            token = token.split(" ");
            token = token[1];
            jwt.verify(token, '3GKsOqRULgOicqaAgzPWGO', function (error, decode) {
                if (error) {
                    throw unauthorized_exception_1.UnAuthorizedException.exception("Unathorized");
                }
                else {
                    req.user_information = {
                        user_name: decode.user_name,
                        refrence_number: decode.refrence_number
                    };
                }
            });
        }
        catch (error) {
            throw unauthorized_exception_1.UnAuthorizedException.exception("UnAuthorized");
        }
        finally {
            next();
        }
    }
};
TokenMiddleware = __decorate([
    (0, common_1.Injectable)()
], TokenMiddleware);
exports.TokenMiddleware = TokenMiddleware;
//# sourceMappingURL=token.middleware.js.map