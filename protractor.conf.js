'use strict';

exports.config = {
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            args: ['--disable-web-security']
        }
    },
    baseUrl: 'http://localhost:8100',
    specs: ['test/protractor/visitors/*.js'],
    jasmineNodeOpts: {
        isVerbose: true,
    }
};
