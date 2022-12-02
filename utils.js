"use strict";
exports.__esModule = true;
exports.idToCoord = exports.coordToId = void 0;
function coordToId(coord) {
    var row = coord[0], col = coord[1];
    return "".concat(row, "-").concat(col);
}
exports.coordToId = coordToId;
function idToCoord(id) {
    var _a = id.split("-").map(function (elem) { return Number(elem); }), row = _a[0], col = _a[1];
    return [row, col];
}
exports.idToCoord = idToCoord;
