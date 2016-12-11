'use strict';

const constants = require('./constants.js');
const node = require('./node.js');
const prototypes = require('./prototypes.js');
const runtime = require('./runtime.js');

module.exports = {
  environments: {
    screeps: {
      globals: Object.assign({}, constants, node, prototypes, runtime),
    },
    constants: {
      globals: constants,
    },
    node: {
      globals: node,
    },
    prototypes: {
      globals: prototypes,
    },
    runtime: {
      globals: runtime,
    },
  },
};
