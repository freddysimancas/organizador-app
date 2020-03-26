"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("../server/server"));
var user_routes_1 = __importDefault(require("./user.routes"));
var inventory_routes_1 = __importDefault(require("./inventory.routes"));
var location_routes_1 = __importDefault(require("./location.routes"));
var properties_routes_1 = __importDefault(require("./properties.routes"));
var report_routes_1 = __importDefault(require("./report.routes"));
var routesApp = server_1.default.instance;
routesApp.app.use('/inventory', inventory_routes_1.default);
routesApp.app.use('/user', user_routes_1.default);
routesApp.app.use('/location', location_routes_1.default);
routesApp.app.use('/properties', properties_routes_1.default);
routesApp.app.use('/report', report_routes_1.default);
exports.default = routesApp;
