"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Report_1 = __importDefault(require("../models/Report"));
var Inventory_1 = __importDefault(require("../models/Inventory"));
exports.getReport = function (req, res) {
    var id = req.params.id;
    Inventory_1.default.findById(id, 'report createdAtReport', function (err, reportDB) {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!reportDB) {
            return res.status(400).json({
                ok: false,
                message: 'El id no existe',
                err: err
            });
        }
        res.json({
            report: reportDB
        });
    });
};
exports.updateReport = function (req, res) {
    var body = req.body;
    var id = req.body._id;
    Inventory_1.default.findByIdAndUpdate(id, { report: body.report, createdAtReport: body.createdAtReport }, { new: true }, function (err, inventoryDB) {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!inventoryDB) {
            return res.status(400).json({
                ok: false,
                err: err,
                mensaje: 'no existe el id'
            });
        }
        res.json({
            report: inventoryDB
        });
    });
};
exports.saveReport = function (req, res) {
    var body = req.body;
    var report = new Report_1.default({
        inventoryId: body.inventoryId,
        description: body.description
    });
    {
        report.save(function (err, reportDB) {
            if (err)
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            res.json({
                ok: true,
                report: reportDB
            });
        });
    }
};
exports.updateState = function (req, res) {
    var id = req.body.inventoryId;
    var state = req.body.state;
    Inventory_1.default.findByIdAndUpdate(id, { state: state }, { new: true, runValidators: true }, function (err, InventorySave) {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            inventarios: InventorySave
        });
    });
};
