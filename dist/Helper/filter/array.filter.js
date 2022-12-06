"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayFilter = void 0;
class ArrayFilter {
    static getIdForInClause(arrayObject, parameter) {
        const finalArray = arrayObject.map(function (obj) {
            return obj.parameter;
        });
        return finalArray;
    }
}
exports.ArrayFilter = ArrayFilter;
//# sourceMappingURL=array.filter.js.map