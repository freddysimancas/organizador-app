"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Location_1 = __importDefault(require("../models/Location"));
exports.getLocations = function (req, res) {
    Location_1.default.find({}).exec(function (err, locationDB) {
        if (err)
            return res.status(400).json({
                ok: false,
                err: err
            });
        res.json({
            ok: true,
            locacions: locationDB
        });
    });
};
exports.saveLocation = function (req, res) {
    var body = req.body;
    var location = new Location_1.default({
        escaparate: body.escaparate,
        columna: body.columna,
        fila: body.fila
    });
    location.save(function (err, locationDB) {
        if (err)
            return res.status(400).json({
                ok: false,
                err: err
            });
        res.status(201).json({
            ok: true,
            location: locationDB
        });
    });
};
