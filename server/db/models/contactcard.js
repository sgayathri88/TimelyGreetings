const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const ContactCard = db.define('contactcard', {
  dateToSend: {
    type: Sequelize.DATE,
    allowNull: false
  },
  dateSent: {
    type: Sequelize.DATE,
  },
  cardText: {
    type: Sequelize.TEXT,
  },
  graphic: {
    type: Sequelize.STRING,
    //link to GIPHY used
  }
})
//contact foreign key
//contact template foreign key

module.exports = ContactCard

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
