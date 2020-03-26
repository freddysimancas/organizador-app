"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("../lib/multer"));
var inventoryController = __importStar(require("../controllers/Inventory.controller"));
var User_controller_1 = require("../controllers/User.controller");
var router = express_1.Router();
router.get('/inventory/:id', User_controller_1.token, inventoryController.getInventoryById);
router.get('/tools/:busqueda', User_controller_1.token, inventoryController.search);
router.get('/inventorys', inventoryController.getInventarios);
router.get('/image/:img', inventoryController.getImage);
router.post('/add-inventory', User_controller_1.token, inventoryController.saveTool);
router.put('/update-inventory', User_controller_1.token, inventoryController.updateTool);
router.put('/image-upload/:id', User_controller_1.token, multer_1.default.single('image'), inventoryController.uploadImage);
router.put('/delete-inventory', User_controller_1.token, inventoryController.deleteTools);
exports.default = router;
