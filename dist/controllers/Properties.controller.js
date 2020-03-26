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
var Type_1 = __importDefault(require("../models/Type"));
var Group_1 = __importDefault(require("../models/Group"));
var Marca_1 = __importDefault(require("../models/Marca"));
var State_1 = __importDefault(require("../models/State"));
var Size_1 = __importDefault(require("../models/Size"));
var Color_1 = __importDefault(require("../models/Color"));
var PropertiesController = /** @class */ (function () {
    function PropertiesController() {
    }
    PropertiesController.prototype.getTypes = function (req, res) {
        Type_1.default.find({}).exec(function (err, typeDB) {
            if (err)
                return res.status(400).json({
                    ok: false,
                    message: 'Error al buscar los tipos de herramientas',
                    err: err
                });
            res.json({
                ok: true,
                types: typeDB
            });
        });
    };
    PropertiesController.prototype.saveType = function (req, res) {
        var name = req.body.name;
        var type = new Type_1.default({
            name: name
        });
        type.save(function (err, typeDB) {
            if (err)
                return res.status(500).json({
                    ok: false,
                    message: 'Error al crear tipos de herramientas',
                    err: err
                });
            res.status(201).json({
                ok: true,
                message: 'Tipo Guardado exitosamente',
                type: typeDB
            });
        });
    };
    PropertiesController.prototype.getGroup = function (req, res) {
        Group_1.default.find({}).exec(function (err, groupDB) {
            if (err)
                return res.status(400).json({
                    ok: false,
                    message: 'Error al buscar los grupos de herramientas',
                    err: err
                });
            res.json({
                ok: true,
                groups: groupDB
            });
        });
    };
    PropertiesController.prototype.saveGroup = function (req, res) {
        var name = req.body.name;
        var grupo = new Group_1.default({
            name: name
        });
        grupo.save(function (err, groupDB) {
            if (err)
                return res.status(500).json({
                    ok: false,
                    message: 'Error al crear grupo de herramientas',
                    err: err
                });
            res.status(201).json({
                ok: true,
                message: 'Grupo Guardado exitosamente',
                group: groupDB
            });
        });
    };
    PropertiesController.prototype.getMarcas = function (req, res) {
        Marca_1.default.find({}).exec(function (err, marcasDB) {
            if (err)
                return res.status(400).json({
                    ok: false,
                    message: 'Error al buscar las marcas de herramientas',
                    err: err
                });
            res.json({
                ok: true,
                marcas: marcasDB
            });
        });
    };
    PropertiesController.prototype.saveMarca = function (req, res) {
        var name = req.body.name;
        var marca = new Marca_1.default({
            name: name
        });
        marca.save(function (err, marcaDB) {
            if (err)
                return res.status(500).json({
                    ok: false,
                    message: 'Error al crear grupo de herramientas',
                    err: err
                });
            res.status(201).json({
                ok: true,
                message: 'Grupo Guardado exitosamente',
                marca: marcaDB
            });
        });
    };
    PropertiesController.prototype.getStates = function (req, res) {
        State_1.default.find({}).exec(function (err, statesDB) {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err: err
                });
            res.json({
                ok: true,
                states: statesDB
            });
        });
    };
    PropertiesController.prototype.saveState = function (req, res) {
        var estado = req.body.name;
        var state = new State_1.default({
            name: estado
        });
        state.save(function (err, stateDB) {
            if (err)
                return res.status(500).json({
                    ok: true,
                    err: err
                });
            res.status(201).json({
                ok: true,
                state: stateDB
            });
        });
    };
    PropertiesController.prototype.getSizes = function (req, res) {
        Size_1.default.find().exec(function (err, SizesDB) {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err: err
                });
            res.json({
                ok: true,
                sizes: SizesDB
            });
        });
    };
    PropertiesController.prototype.saveSize = function (req, res) {
        var tamaño = req.body.name;
        var size = new Size_1.default({
            name: tamaño
        });
        size.save(function (err, sizesDB) {
            if (err)
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            res.json({
                ok: true,
                sizes: sizesDB
            });
        });
    };
    PropertiesController.prototype.getColors = function (req, res) {
        Color_1.default.find().exec(function (err, colorsDB) {
            if (err)
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            res.json({
                ok: true,
                colors: colorsDB
            });
        });
    };
    PropertiesController.prototype.saveColor = function (req, res) {
        var colorH = req.body.name;
        var color = new Color_1.default({
            name: colorH
        });
        color.save(function (err, colorsDB) {
            if (err)
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            res.json({
                ok: true,
                colors: colorsDB
            });
        });
    };
    PropertiesController.prototype.deleteGroup = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, groupBorrado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Group_1.default.where('_id').findOneAndRemove({ _id: id })];
                    case 1:
                        groupBorrado = _a.sent();
                        res.json({
                            group: groupBorrado
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PropertiesController.prototype.deleteType = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, typeBorrado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Type_1.default.where('_id').findOneAndRemove({ _id: id })];
                    case 1:
                        typeBorrado = _a.sent();
                        res.json({
                            type: typeBorrado
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PropertiesController.prototype.deleteMarca = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, marcaBorrado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Marca_1.default.where('_id').findOneAndRemove({ _id: id })];
                    case 1:
                        marcaBorrado = _a.sent();
                        res.json({
                            marca: marcaBorrado
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PropertiesController.prototype.deleteState = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, stateBorrado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, State_1.default.where('_id').findOneAndRemove({ _id: id })];
                    case 1:
                        stateBorrado = _a.sent();
                        res.json({
                            state: stateBorrado
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PropertiesController.prototype.deleteSize = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, sizeBorrado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Size_1.default.where('_id').findOneAndRemove({ _id: id })];
                    case 1:
                        sizeBorrado = _a.sent();
                        res.json({
                            size: sizeBorrado
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PropertiesController.prototype.deleteColor = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, colorBorrado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Color_1.default.where('_id').findOneAndRemove({ _id: id })];
                    case 1:
                        colorBorrado = _a.sent();
                        res.json({
                            color: colorBorrado
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return PropertiesController;
}());
exports.propertiesController = new PropertiesController();
