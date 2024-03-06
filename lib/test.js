"use strict";

var _node = require("@wdio/config/node");
function loadFeatureTags(config) {
  let configParser = new _node.ConfigParser();
  configParser.getSpecs();
}
loadFeatureTags();