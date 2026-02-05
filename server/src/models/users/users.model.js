const User = require('./users.mongo');

const createNewUser = async userData => {
  const newUser = new User(userData);
  return await newUser.save();
};

module.exports = {
  createNewUser,
};
