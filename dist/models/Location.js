"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var locationSchema = new mongoose_1.Schema({
    escaparate: {
        type: String,
        required: false
    },
    columna: {
        type: String,
        required: false
    },
    fila: {
        type: String,
        required: false
    }
});
exports.default = mongoose_1.model('Location', locationSchema);
