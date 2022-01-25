/**
 * Todos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    category :{
      type: 'string',
      required: true,
    },
    details: {
      type: 'string',
      required: true,
    },
    creationDate:{
      type: 'ref',
      columnType: 'datetime',
    },
    expireDate:{
      type: 'ref',
      columnType: 'datetime',
    }

  },

};

