const add = require('./add');
const sub = require('./sub');
const mul = require('./mul');
const div = require('./div');
const common = require('./common');

module.exports={
    ...common,
    add,sub, mul,div
}