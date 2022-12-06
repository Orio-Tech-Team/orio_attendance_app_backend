"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedDocumentFilter = void 0;
class CreatedDocumentFilter {
    static filter(document) {
        delete document.created_at;
        delete document.updated_at;
        delete document.status;
        delete document.is_deleted;
        return document;
    }
}
exports.CreatedDocumentFilter = CreatedDocumentFilter;
//# sourceMappingURL=create-document.filter.js.map