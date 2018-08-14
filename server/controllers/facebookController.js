const axios = require('axios');
const facebookController = {};

facebookController.getProfileData = (req, res, next) => {
  let { userID, userToken } = req.query;
  axios.get(`https://graph.facebook.com/v3.1/${userID}?`, {
    params: {
      fields: 'id, name, email, picture',
      access_token: userToken
    }
  })
    .then(response => {
      res.locals.data = response.data;
      next();
    })
    .catch(function (error) {
      console.log(error);
    });
};

facebookController.getUserFeed = (req, res, next) => {
  let { userID, userToken } = res.locals.token;
  axios.get(`https://graph.facebook.com/v3.1/${userID}?`, {
    params: {
      fields: 'posts',
      access_token: userToken
    }
  })
    .then(response => {
      res.locals.data = response.data;
      next();
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = facebookController;