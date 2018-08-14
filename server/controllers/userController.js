const User = require('../models/User');

const userController = {};

userController.checkDB = (req, res, next) => {
    let {userID, userToken } = req.query;
    if (!userID) {
        res.send('Error at DB check, no userID');
    }
    User.find( { id : userID }, (err, result) => {
        if (result.length === 1) {
            let { _id, id, name, email, picture} = result[0];
            res.locals.userInfo = { private:{ _id, userID: id, userToken}, public: {name, email, picture}};
            next();
        }
        else {
            next();
        }
    });
};

userController.saveUserToDB = (req, res, next) => {
    let { data } = res.locals;
    User.create( data, (err, result) => {
        if (err) console.log('err saving user')
        if (result) {
            let private = { _id: result._id, userID: result.id, userToken: req.query.userToken};
            let public = { name: result.name, email: result.email, picture: result.picture };
            res.locals.userInfo = { private, public };
        }
        next();
    })
};

module.exports = userController;