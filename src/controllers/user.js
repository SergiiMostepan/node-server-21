const {
  User
} = require('../models/index');

const createUser = async (req, res, next) => {
  try {
    const {
      username,
      phoneNumber,
      email,
      balance
    } = req.body;

    const user = await User.create({
      username,
      phoneNumber,
      email,
      balance
    });

    return res.status(201).send({
      user: {
        id: user.id,
        username: user.username,
        phoneNumber: user.phoneNumber,
        email: user.email,
        balance: user.balance,
      },
    });
  } catch (err) {
    next(err);
  }
};

const getUsers = async (req, res, next) => {
  try {

    const transactionsData = await User.findAll();

    return res.status(200).json(transactionsData);
  } catch (err) {
    next(err);
  }
};

const getUserByName = async (req, res, next) => {
  try {
    const {
      username,
    } = req.body;
    const userData = await User.findOne({
      where: {
        username
      },
      raw: true
    });;

    return res.status(200).json(userData);
  } catch (err) {
    next(err);
  }
}

const getUserById = async (req, res, next) => {
  try {
    const {
      userId,
    } = req.params;

    const userData = await User.findOne({
      where: {
        id: Number(userId)
      },
      raw: true
    });


    if (!userData) {
      return res.status(404).json('user not found');
    }

    return res.status(200).json(userData);
  } catch (err) {
    next(err);
  }
}

const updateUser = async (req, res, next) => {
  try {
    const {
      userId,
    } = req.params;

    const {
      username,
      phoneNumber,
      email,
      balance
    } = req.body;

    // const userData = await User.findOne({
    //   where: {
    //     id: Number(userId)
    //   },
    //   raw: true
    // });

    // if (!userData) {
    //   return res.status(404).json('user not found');
    // }

    const updatedUser = await User.update({
      username,
      phoneNumber,
      email,
      balance
    }, {
      where: {
        id: userId
      }
    });

    if (updatedUser == 1) {
      return res.status(200).json('Updated');
    } else if (updatedUser == 0) {
      return res.status(404).json('user not found');
    }

  } catch (err) {
    next(err);
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserByName,
  getUserById,
  updateUser
};