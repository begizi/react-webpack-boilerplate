/**
 * Require all tasks in /gulp folder
 */
var requireDir = require('require-dir');

requireDir('./gulp', { recurse: true });
