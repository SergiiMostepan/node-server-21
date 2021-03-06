const {
  DataTypes
} = require('sequelize');
const sequelize = require('../helpers/sequelize');

const User = sequelize.define(
  'Users', {
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'username is required'
        },
        notEmpty: true,
      },
    },
    phoneNumber: {
      type: DataTypes.FLOAT,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'phone number is required'
        },
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'email is required'
        },
        notEmpty: true,
      },
    },
    balance: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  },
);

module.exports = User;