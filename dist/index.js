"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var server = server_1.default.instance;
server.app.get('/', function (req, res) {
    res.json({
        ok: true,
        mensaje: 'Vamos bien'
    });
});
server.start(function () {
    console.log('Servidor Corriendo');
});
