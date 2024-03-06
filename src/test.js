import { ConfigParser } from '@wdio/config/node'

function loadFeatureTags(config) {
    let configParser = new ConfigParser();
    configParser.getSpecs();
}

loadFeatureTags();