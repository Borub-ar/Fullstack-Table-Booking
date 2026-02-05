const { createNewUser } = require('../../models/users/users.model');

const httpCreateNewUser = async (req, res) => {
  const newUserData = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  };

  await createNewUser(newUserData);
  return res.status(201).json({ message: 'User created successfully' });
};

module.exports = {
  httpCreateNewUser,
};
