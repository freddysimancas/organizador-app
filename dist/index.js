"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var server = server_1.default.instance;
// CORS
server.app.use(cors_1.default({ origin: true, credentials: true }));
// middleware
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// Loading Routes
require("./routes/routes");
// Conecting MongoDB
try {
    mongoose_1.default.connect('mongodb+srv://freddy:tbODvlrBNnfUdyYK@cluster0-umud9.mongodb.net/organizador'),
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            autoIndex: false,
            useUnifiedTopology: true
        };
    console.log('Base de datos corriento');
}
catch (error) {
    console.log('Error en la base de datos');
    throw new Error(error);
}
server.start(function () {
    console.log('Servidor Corriendo');
});
