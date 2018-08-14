const keys = require('../../config/keys');
const jwt = require('jsonwebtoken')

const authController = {};

authController.createJWT = (req, res, next) => {
    if (!res.locals.userInfo) {
        next();
    }
    else {
        let { userInfo } = res.locals;
        let token = jwt.sign(userInfo.private, keys.secret)
        res.send({ token, ...userInfo.public });
    }
};

authController.verifyJWT = (req, res, next) => {
    let { userToken } = req.query;
    let token = jwt.verify( userToken, keys.secret )
    res.locals.token = token;
    next();
};

module.exports = authController;