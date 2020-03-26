"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var stateSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El estado es necesario']
    }
});
exports.default = mongoose_1.model('State', stateSchema);
