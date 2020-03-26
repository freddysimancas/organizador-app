"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var locationController = __importStar(require("../controllers/Location.controller"));
var routes = express_1.Router();
routes.get('/locacions', locationController.getLocations);
routes.post('/add-location', locationController.saveLocation);
exports.default = routes;
