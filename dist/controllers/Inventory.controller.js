"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Inventory_1 = __importDefault(require("../models/Inventory"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
exports.getInventarios = function (req, res) {
    Inventory_1.default.find({ available: true }, 'name marca type group location state size color quantify createdAt img').exec(function (err, inventarioDB) {
        if (err)
            return res.status(400).json({
                ok: false,
                err: err
            });
        res.json({
            ok: true,
            inventaios: inventarioDB
        });
    });
};
exports.getInventoryById = function (req, res) {
    var id = req.params.id;
    Inventory_1.default.findById(id, 'name marca type group location state size color quantify img', function (err, inventoryDB) {
        if (err)
            return res.status(500).json({
                ok: false,
                err: err
            });
        if (!inventoryDB)
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El id de la herramienta no sirve',
                    err: err
                }
            });
        res.json({
            ok: true,
            inventory: inventoryDB
        });
    });
};
exports.updateTool = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, tool;
    return __generator(this, function (_a) {
        id = req.body._id;
        tool = req.body.tools;
        Inventory_1.default.findByIdAndUpdate(id, tool, { new: true }, function (err, inventoryUpdate) {
            if (err)
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            if (!inventoryUpdate)
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'El id no existe',
                        err: err
                    }
                });
            console.log(tool);
            res.json({
                ok: true,
                inventario: inventoryUpdate
            });
        });
        return [2 /*return*/];
    });
}); };
exports.deleteTools = function (req, res) {
    var id = req.body._id;
    Inventory_1.default.findByIdAndUpdate(id, { available: false }, { new: true }, function (err, inventoryDelete) {
        if (err)
            return res.status(500).json({
                ok: false,
                err: err
            });
        if (!inventoryDelete)
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El id no existe',
                    err: err
                }
            });
        res.json({
            ok: true,
            iventario: inventoryDelete
        });
    });
};
exports.search = function (req, res) {
    var busqueda = req.params.busqueda;
    var regex = new RegExp(busqueda, 'i');
    Inventory_1.default.find({ name: regex, available: true }, function (err, inventoryDB) {
        if (err)
            return res.status(500).json({
                ok: false,
                err: err
            });
        res.json({
            ok: true,
            tools: inventoryDB
        });
    });
};
exports.getImage = function (req, res) {
    var img = req.params.img;
    var pathImagen = path_1.default.resolve(__dirname, "../../uploads/" + img);
    if (fs_1.default.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    }
    else {
        res.json({
            ok: false,
            img: 'no image'
        });
    }
};
exports.uploadImage = function (req, res) {
    var id = req.params.id;
    var imageName = req.file.filename;
    Inventory_1.default.findByIdAndUpdate(id, { img: imageName }, { new: true }, function (err, imageDB) {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err,
                aqui: 'aqui es el error'
            });
        }
        res.json({
            ok: true,
            inventaios: imageDB
        });
    });
};
exports.saveTool = function (req, res) {
    var body = req.body;
    var inventory = new Inventory_1.default({
        name: body.name,
        userId: body.usuario._id,
        marca: body.marca,
        type: body.type,
        size: body.size,
        color: body.color,
        group: body.group,
        location: {
            escaparate: body.escaparate,
            columna: body.columna,
            fila: body.fila
        },
        state: body.state,
        quantify: body.quantify
    });
    inventory.save(function (err, inventoryDB) {
        if (err)
            return res.status(400).json({
                ok: false,
                err: err
            });
        res.status(201).json({
            ok: true,
            inventarios: inventoryDB
        });
    });
};
