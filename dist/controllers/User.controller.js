"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var User_1 = __importDefault(require("../models/User"));
exports.getUsers = function (req, res) {
    User_1.default.find().exec(function (err, userDB) {
        if (err)
            return res.status(400).json({
                ok: false,
                message: 'Error al guardar el mensaje',
                err: err
            });
        res.json({
            ok: true,
            usuarios: userDB
        });
    });
};
exports.saveUser = function (req, res) {
    var body = req.body;
    var user = new User_1.default({
        firstName: body.firstName,
        lastName: body.lastName,
        sex: body.sex,
        email: body.email,
        password: bcrypt_1.default.hashSync(body.password, 10)
    });
    user.save(function (err, userDB) {
        if (err)
            return res.status(400).json({
                ok: false,
                message: 'Error al guardar el usuario',
                err: err
            });
        res.status(201).json({
            ok: true,
            user: userDB
        });
    });
};
exports.login = function (req, res) {
    var body = req.body;
    User_1.default.findOne({ email: body.email }, function (err, userDB) {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar usuario'
            });
        }
        if (!userDB) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Credenciales incorrectas - email',
                err: err
            });
        }
        if (!bcrypt_1.default.compareSync(String(body.password), userDB.password)) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Credenciales incorrectar - password',
                err: err
            });
        }
        // Crear Token
        userDB.password = ':)';
        var token = jsonwebtoken_1.default.sign({
            user: userDB
        }, '@este-es-el-seed-de-freddy-organizador', {
            expiresIn: '24h'
        });
        res.status(200).json({
            ok: true,
            user: userDB,
            id: userDB._id,
            token: token
        });
    });
};
exports.token = function (req, res, next) {
    var token = req.query.token;
    jsonwebtoken_1.default.verify(token, '@este-es-el-seed-de-freddy-organizador', function (err, decode) {
        if (err) {
            return res.status(401).json({
                ok: false,
                message: 'Token no valido',
                err: err
            });
        }
        req.body.usuario = decode.user;
        next();
    });
};
exports.verificarAdmin = function (req, res, next) {
    var usuario = req.body.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
        return;
    }
    else {
        return res.status(401).json({
            ok: false,
            message: 'Token no valido - no es administrador'
        });
    }
};
