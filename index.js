/**
 * Created by mohwa on 2018. 2. 14..
 */

var Ganada = null;

try{ Ganada = require('./dist/ganada'); }
catch(e){ Ganada = require('./src/ganada'); }

module.exports = Ganada;
  
