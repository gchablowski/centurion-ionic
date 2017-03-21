'use strict';

exports.config = {
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            args: ['--disable-web-security']
        }
    },
    baseUrl: 'http://localhost:8100',
    specs: ['test/protractor/main/*.js'],
    jasmineNodeOpts: {
        isVerbose: true,
    }
};
