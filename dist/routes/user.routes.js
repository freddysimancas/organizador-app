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
var userController = __importStar(require("../controllers/User.controller"));
var router = express_1.Router();
router.get('/users', userController.getUsers);
router.post('/add-user', [userController.token, userController.verificarAdmin], userController.saveUser);
router.post('/login', userController.login);
exports.default = router;
