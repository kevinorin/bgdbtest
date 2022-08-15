'use strict';

/**
 * blockchain-game service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blockchain-game.blockchain-game');
