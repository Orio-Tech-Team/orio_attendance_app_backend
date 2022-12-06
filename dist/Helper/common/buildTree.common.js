"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTree = void 0;
async function buildTree(elements, parent = null) {
    let branch = [];
    for (var i in elements) {
        if (elements[i].parent_id === parent) {
            var children = await buildTree(elements, elements[i].id);
            if (children.length) {
                elements[i].children = children;
            }
            branch.push(elements[i]);
        }
    }
    return branch;
}
exports.buildTree = buildTree;
//# sourceMappingURL=buildTree.common.js.map