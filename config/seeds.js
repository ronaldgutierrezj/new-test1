/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */
module.exports.seeds = {
  todos: [
    {
      category: 'cleaning',
      details: 'kitchen floor needs to be moop',
      creationDate: '',
      expireDate: '',
    },
    {
      category: 'shopping',
      details: 'new shoes for work',
      creationDate: '',
      expireDate: '',
    },
  ]};
