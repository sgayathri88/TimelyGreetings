const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Contact = db.define('contact', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  birthday: {
    type: Sequelize.DATE,
  },
})

module.exports = Contact

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
