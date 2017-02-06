var conf = require('../../config');
var tokenService = require('./tokenService');

var Response = function(status, message) {
    return {
        status: status,
        message: message
    };
};

module.exports = {
    success: function(res) {
        res.status(200).send(Response('success', '成功'));
    },

    userNotExisted: function(res) {
        res.status(400).send(Response('failure', '用户不存在'));
    },

    usernameOrPasswordWrong: function(res) {
        res.status(400).send(Response('failure', '用户名/密码错误'));
    },

    authenticationFailed: function(res) {
        res.status(400).send(Response('failure', '未授权'));
    },

    toBeModifiedPasswordWrong: function(res) {
        res.status(400).send(Response('failure', '旧密码无法通过验证'));
    },

    notAllowed: function(res) {
        res.status(401).send(Response('failure', '不允许这样做'));
    },

    userValidationError: function(res, error) {
        res.status(400).send(Response('failure', error));
    },

    presetationOwnerValidationError: function(res) {
        res.status(400).send(Response('failure', '不允许这样做'));
    },

    createAndSendToken: function(res, user) {
        var payload = {
            _id: user._id,
            username: user.username,
            nickname: user.nickname,
            anonymous: false,
            rootDirectory: user.rootDirectory,
        };

        var token = tokenService.generateToken(payload);

        res.status(200).send({
            payload: payload,
            accessToken: token
        });
    },

    createAndSendAnonymousToken: function(res, user) {
        var payload = {
            _id: user._id,
            username: user.username,
            nickname: user.nickname,
            anonymous: true,
            //no rootDirectory for anonymous user
        };

        var token = tokenService.generateToken(payload);

        res.status(200).send({
            payload: payload,
            accessToken: token
        });
    }
};
