"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ColorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'EL color es necesario']
    }
});
exports.default = mongoose_1.model('Color', ColorSchema);
