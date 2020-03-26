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
var reportController = __importStar(require("../controllers/Report.controller"));
var router = express_1.Router();
router.get('/reports/:id', reportController.getReport);
router.put('/update-state-report', reportController.updateState);
router.put('/update-report', reportController.updateReport);
exports.default = router;
